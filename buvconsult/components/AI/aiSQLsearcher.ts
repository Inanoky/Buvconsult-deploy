"use server"

// aiSQLsearcher.ts
import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import {prisma} from "@/app/utils/db";
import {constructionCategories} from "@/components/AI/ConstructionCategories";
import {
    databaseSchema,
    newSQLDescriptionPrompt,
    qualityControlPrompt,
    qualityControlSystemPrompt,
    queryAnalysisSystemPrompt,
    returnBestFitFieldsPrompt,
    returnBestFitFieldsSystemPrompt,
    SQLConstructSystemPrompt,
    SQLFormatSystemPrompt
} from "@/components/AI/Prompts";

export default async function graphQuery(question){


//Below are technical for validations.

const allowedFieldKeys = [
  "date",
  "item",
  "quantity",
  "unitOfMeasure",
  "pricePerUnitOfMeasure",
  "sum",
  "currency",
  "category",
  "itemDescription",
  "commentsForUser",
  "isInvoice",
  "invoiceId",
  "invoiceNumber",
  "sellerName",
  "invoiceDate",
  "paymentDate"
];

const schema = databaseSchema


//Types declaration

type StatusType = "SQL" | "VECTOR";
type Status = {
    status: StatusType | null;
    answer?: string;
    reason?: string;
};

const state = Annotation.Root({
    message: Annotation<string>(),
    status: Annotation<Status>(),
    sql: Annotation<string | null>({ default: () => null }),
    fullResult: Annotation<any | null>({ default: () => null }),
    result: Annotation<any | null>({ default: () => null }),
    aIComment: Annotation<any | null>(),
    userDisplayFields : Annotation<string[]>(),
    pastMessages: Annotation<string[]>({
        default: () => [],
        reducer: (currValue, updateValue) => currValue.concat(updateValue),
    }),
});

const queryAnalysis = async (state) => {
    console.log("STATE RECEIVED IN queryAnalysis:", state)
    const llm = new ChatOpenAI({
        temperature: 0,
        model: "gpt-4.1",
        system: queryAnalysisSystemPrompt

    });

    const structuredLlm = llm.withStructuredOutput(
        z.object({
            status: z.enum(["SQL", "VECTOR"]).describe("If request is a better fit for SQL or vector query"),
            reason: z.string().describe("Reason for the decision"),
        })
    );

    const res = await structuredLlm.invoke(["human", `${state.message}`]);

    console.log("queryAnalysis  ", res)
    return {
        ...state,
        status: { status: res.status, reason: res.reason },
    };
};

const SQLplanner = async (state) => state;

const SQLconstruct = async (state) => {
    const llm = new ChatOpenAI({
        temperature: 0,
        model: "gpt-4.1",
        system: SQLConstructSystemPrompt

    });

    const structuredLlm = llm.withStructuredOutput(
        z.object({
            sql : z.string().describe("raw SQL query. All columns and fields names should be in double quotes" +
                "alwyas use ILIKE %% with WHERE query."),
            reason: z.string().describe("based on what you made your decisions")

        })
    )

    const prompt = `Schema:\n${schema}\nUser question: ${state.message}\nWrite a valid PostgreSQL SQL query (no explanation).
    categories : ${JSON.stringify(constructionCategories)}`;

    const res = await structuredLlm.invoke(["human", prompt]);
    console.log("SQLconstruct  ", res)
    return {
        ...state,
        sql: res.sql,
    };
};

//USE BELOW AS TEMPLATE

const SQLformat = async(state) => {

    const llm = new ChatOpenAI({
        temperature: 0.1,
        model: "gpt-4.1",
        system: SQLFormatSystemPrompt,



    });


    const structuredLlm = llm.withStructuredOutput(
        z.object({
            newSQL : z.string().describe(newSQLDescriptionPrompt),
            reason: z.string().describe("based on what you made your decisions")
        })
    )

    const prompt = `SQL command for checking : ${state.sql}, prisma schema ${schema}`

    const res = await structuredLlm.invoke(["human", prompt]);

    console.log("SQL format ", res)

    return {
        ...state,
        sql: res.newSQL,
    };


}


// SQLexecute - this executes the SQL. fullResult - only used here, later we sanitize and final result
// will only have 4 fileds max.
const SQLexecute = async (state) => {
    const sql = state.sql;
    if (!sql) {
        return { ...state, fullResult: "No SQL generated." };
    }
    try {
        const result = await prisma.$queryRawUnsafe(sql);
       console.table(
              result.map(({ item, quantity, pricePerUnitOfMeasure, sum, sellerName, invoiceDate }) => ({

                item,
                quantity,
                pricePerUnitOfMeasure,
                sum,
                sellerName,
                invoiceDate
              }))
);
       console.log(`Prisma SQL query result: ${JSON.stringify(result, null, 2)}`);
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

const handleVector = async (state) => ({
    ...state,
    result: "Sorry, your query cannot be handled via SQL. Please paraphrase or make your request more specific.",
});

//Currently this is a final step.
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

    const res = await structuredLlm.invoke(["human", prompt]);

    console.log("returnBestFitFields ", res)
    console.log(state.userDisplayFields)
    state.userDisplayFields = res.userDisplayFields;

//This supposed to remove keys which are not important for the user
   const result = state.fullResult.map(obj =>
  Object.fromEntries(
    Object.entries(obj).filter(([field]) =>
      state.userDisplayFields.includes(field)
    )
  )
);


    return {
        ...state,
        result: result,
        useDisplayFields: res.userDisplayFields,
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
  const batchSize = 20;

  const llm = new ChatOpenAI({
    temperature: 0.1,
    model: "gpt-4.1",
    system: qualityControlSystemPrompt,
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

  const allData = state.fullResult;
  const batches = [];
  for (let i = 0; i < allData.length; i += batchSize) {
    batches.push(allData.slice(i, i + batchSize));
  }

  const userQuestion =
    typeof question !== "undefined"
      ? question
      : state.message || state.userRequest || "";

  const prompts = batches.map(
    (batch) => `
User question: ${userQuestion}
Data batch: ${JSON.stringify(batch, null, 2)}
${qualityControlPrompt}
`
  );

  const responses = await Promise.all(
    prompts.map((prompt, idx) =>
      structuredLlm.invoke(["human", prompt]).then((res) => ({
        res,
        batch: batches[idx],
      }))
    )
  );

  // Collect all items with id, accepted, and reason
  let allResults = [];
  responses.forEach(({ res, batch }) => {
    allResults = allResults.concat(
      res.results.map((result) => {
        const obj = batch.find((item) => item.id === result.id);
        return {
          ...result,
          object: obj,
        };
      })
    );
  });

  // Log each result
  allResults.forEach((r) => {
    console.log(
      `ID: ${r.id} | Accepted: ${r.accepted} | Reason: ${r.reason}`
    );
  });

  // Filter accepted only if you want to update state.fullResult
  const filtered = allResults.filter((r) => r.accepted).map((r) => r.object);

  return {
    ...state,
    fullResult: filtered,

  };
};



const summary = async(state) => {

    const llm = new ChatOpenAI({
        temperature: 0.1,
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
        aIComment : res.aIComment
    };


}






const workflow = new StateGraph(state)
    .addNode("query-analysis", queryAnalysis)
    .addNode("sql-construct", SQLconstruct)
    .addNode("sql-format", SQLformat)
    .addNode("sql-execute", SQLexecute)
    .addNode("qualityControl", qualityControl)
    //Here I will add node to rate of the fields by relevance and returned most 4 most relevant fileds to the query.
    .addNode("return-best-fit-fields", returnBestFitFields)
    // .addNode("sql-result-format", SQLResultFormat)
    .addNode("handle-vector", handleVector)
    .addNode("summary",summary) //New node

    .addEdge("__start__", "query-analysis")
    .addConditionalEdges("query-analysis", (state) =>
        state.status.status === "SQL" ? "sql-construct" : "handle-vector"
    )
    .addEdge("sql-construct", "sql-format")
    .addEdge("sql-format", "sql-execute")
    .addEdge("sql-execute", "qualityControl")
    .addEdge("qualityControl","return-best-fit-fields")
    .addEdge("return-best-fit-fields", "summary")
    .addEdge("summary", "__end__")
    .addEdge("handle-vector","__end__")

const graph = workflow.compile()


// -------------------- TEST -----------------------


// This below to start with but aiSQLsearcher.ts
// const res = await graph.invoke({
//
//     message: "Find my 5 largest expenses"
//     // message: "Find my largest expense"
//
// })
//
// console.log(res)

// -------------------- RUN -----------------------


const graphResult = await graph.invoke({
    message: question
     })


return graphResult


}



