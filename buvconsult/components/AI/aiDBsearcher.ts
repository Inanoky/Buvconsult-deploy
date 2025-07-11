"use server"

// aiDBsearcher.ts
import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import {prisma} from "@/app/utils/db";
import {constructionCategories} from "@/components/AI/ConstructionCategories";
import {
    allowedFieldKeys, allowedFieldKeysPrompt,
    databaseSchema,
    newSQLDescriptionPrompt, qualityControlAiWasteAgent,
    qualityControlPrompt,
    qualityControlSystemPrompt,
    queryAnalysisSystemPrompt,
    returnBestFitFieldsPrompt,
    returnBestFitFieldsSystemPrompt,
    SQLConstructSystemPrompt,
    SQLFormatSystemPrompt, stateDefault
} from "@/components/AI/Prompts";
import {requireUser} from "@/app/utils/requireUser";
import aiWasteAgent from "@/components/AI/aiWasteAgent";

export default async function aiDBsearch(stateReceived){

const state = stateDefault

const allowedFieldKeys = allowedFieldKeysPrompt

const schema = databaseSchema


const SQLformat = async(state) => {

    const user = await requireUser();

    const llm = new ChatOpenAI({
        temperature: 0.1,
        model: "gpt-4.1",




    });


    const structuredLlm = llm.withStructuredOutput(
        z.object({
            newSQL : z.string().describe(newSQLDescriptionPrompt),
            reason: z.string().describe("based on what you made your decisions")
        })
    )

    const prompt = `SQL command for checking : ${state.sql},
     prisma schema ${schema},      
     siteId" = '${state.siteId},
     question = ${state.message}
     `

    const res = await structuredLlm.invoke([
        ["system",SQLFormatSystemPrompt ],
        ["human", prompt]]);




    console.log("SQL format ", res)

    return {
        ...state,
        sql: res.newSQL,
    };


}


// SQLexecute - this executes the SQL. fullResult - only used here, later we sanitize and final result
// will only have 4 fileds max.


const SQLexecute = async (state) => {



    // This below is filter to use userId and siteId


    const sql = state.sql

    if (!sql) {
        return { ...state, fullResult: "No SQL generated." };
    }
    try {
        const result = await prisma.$queryRawUnsafe(sql);

       // console.log(`Prisma SQL query result: ${JSON.stringify(result, null, 2)}`);
        console.log("SQLexecute  : ", result)
        return {
            ...state,
           fullResult : result,
        };
    } catch (e) {

        return {

            ...state,
            result: `SQL Error: ${e.message}`,
        };
    }
};


const returnBestFitFields = async(state) => {

    const llm = new ChatOpenAI({
        temperature: 0.1,
        model: "gpt-4.1",
        system: returnBestFitFieldsSystemPrompt


    });


    const structuredLlm = llm.withStructuredOutput(
        z.object({
            userDisplayFields: z
                    .array(z.enum(allowedFieldKeys)) // only those strings allowed
                    .max(6, "No more than 6 fields allowed")
                    .describe("chose 6 FieldKeys which would be best to use to display data to the user "),
            reason: z.string().describe("based on what you made your decisions")
        })
    )

    const prompt = `SQL command for checking : ${state.sql} 
                          prisma schema ${schema}
                          `

    const response = await structuredLlm.invoke(["human", prompt]);

    console.log("returnBestFitFields ", response)

    state.userDisplayFields = response.userDisplayFields;

//This supposed to remove keys which are not important for the user
   const result = state.fullResult.map(obj =>
          Object.fromEntries(
            Object.entries(obj).filter(([field]) =>
              state.userDisplayFields.includes(field)
            )
          )
        );

    console.log(`SQL execute ${result}`)
    return {
        ...state,
        result: result,
        useDisplayFields: response.userDisplayFields,
    };


}


//So, this one we can take a fullResult, batch it (say 20 objects in one go
// then we will ask GPT to compare if query fit is a good fit for user request or not.
// we will ask only to return values which it thinks is a good fit,
    // Step 1 : batch fullResult to 20 objects
    // Step 2 : send those with promise.all to GPT, tell it to return only those who are good fit
    // Step 3 : collect in a new fullResult
    // Step 4 : proceed with steps

const qualityControl = async (state) => {
  const batchSize = 50;

  const llm = new ChatOpenAI({
    temperature: 0.5,
    model: "gpt-4.1",
  });

  const structuredLlm = llm.withStructuredOutput(
    z.object({
      results: z.array(
        z.object({
          id: z.string(),
          accepted: z.boolean(),
          reason: z.string(),
        })
      ),
    })
  );

  // All items to check
  const allData = state.fullResult || [];

  // Split into batches
  const batches = [];
  for (let i = 0; i < allData.length; i += batchSize) {
    batches.push(allData.slice(i, i + batchSize));
  }

  // Get user question, fallback logic
  const userQuestion =
    typeof state.message !== "undefined"
      ? state.message
      : state.message || state.userRequest || "";

  // Prepare prompts per batch
  const prompts = batches.map(
    (batch) => `
      User question: ${userQuestion}
      Data batch: ${JSON.stringify(batch, null, 2)}
    `
  );

  // Call LLM for each batch in parallel
  const responses = await Promise.all(
    prompts.map((prompt, idx) =>
      structuredLlm
        .invoke([
          ["system", qualityControlAiWasteAgent],
          ["human", prompt],
        ])
        .then((res) => ({
          res,
          batch: batches[idx],
        }))
    )
  );

  // Collect ALL results from all batches
  let acceptedResults = [];
  responses.forEach(({ res, batch }) => {
    res.results.forEach((result) => {
      if (result.accepted) {
        const obj = batch.find((item) => item.id === result.id);
        if (obj) {
          acceptedResults.push({
            ...obj,                 // original data
            accepted: result.accepted,
            reason: result.reason,  // add reason here!
          });
        }
      }
    });
  });



  // LOG EACH ACCEPTED RESULT ONE BY ONE
  acceptedResults.forEach((r, i) => {
    console.log(`Accepted result #${i + 1}:`, r);
  });

  // Optionally: If you still want only pure data objects in fullResult:
  const filtered = acceptedResults.map(({accepted, reason, ...rest}) => rest);

  // Return new state with acceptedResults (with reasons) for UI
  return {
    ...state,
    acceptedResults: acceptedResults, // <-- for UI (accepted items + reasons)
    fullResult: filtered, // (optional: only the pure objects)
  };
};


const summary = async(state) => {

    const llm = new ChatOpenAI({
        temperature: 0.5,
        model: "gpt-4.1",
        system:
            `You summarize SQL query and make a conclusion base on a SQL query result and user question`


    });


    const structuredLlm = llm.withStructuredOutput(
        z.object({
            aIComment : z.string().describe("Summary"),
            reason: z.string().describe("based on what you made your decisions")
        })
    )

    const prompt = `
        SQL command for checking : ${state.sql},
        prisma schema ${schema},
        SQL query results ${JSON.stringify(state.fullResult)},
        original user question ${state.message}`

    const res = await structuredLlm.invoke(["human", prompt]);

    console.log("summary ", res)

    return {
        ...state,
        aiComment : res.aIComment
    };


}






const workflow = new StateGraph(state)

    .addNode("sql-format", SQLformat)
    .addNode("sql-execute", SQLexecute)
    .addNode("qualityControl", qualityControl)
    //Here I will add node to rate of the fields by relevance and returned most 4 most relevant fileds to the query.
    .addNode("return-best-fit-fields", returnBestFitFields)
    // .addNode("sql-result-format", SQLResultFormat)
    .addNode("summary",summary) //New node
    .addEdge("__start__", "sql-format")
    .addEdge("sql-format", "sql-execute")
    .addEdge("sql-execute", "qualityControl")
    .addEdge("qualityControl","return-best-fit-fields")
    .addEdge("return-best-fit-fields", "summary")
    .addEdge("summary", "__end__")



const graph = workflow.compile()




const graphResult = await graph.invoke({
    ...stateReceived
     })

// console.log(`This is final form aiDBsearcher ${JSON.stringify(graphResult)}`)
return graphResult


}



