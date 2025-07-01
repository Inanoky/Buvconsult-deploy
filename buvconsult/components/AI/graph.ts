"use server"

// graph.ts
import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import {prisma} from "@/app/utils/db";

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

const schema = `
                                            model "InvoiceItems" {
                                              id String @id @default(uuid())
                                              date String? - Description : contains date of an invoice
                                              item String? - Description : contain original description of an invoice item
                                              quantity Float? - 
                                              "unitOfMeasure" String?
                                              "pricePerUnitOfMeasure" Float?
                                              sum Float?
                                              currency String? 
                                              category String? 
                                              "itemDescription" String? - Description : detailed description of what this invoice item is
                                              "commentsForUser" String?
                                              "isInvoice" Boolean?
                                              "invoiceId" String
                                              invoice Invoices @relation(fields: [invoiceId], references: [id], onDelete: Cascade)
                                              "Site" Site? @relation(fields: [siteId], references: [id], onDelete: Cascade)
                                              "siteId" String?
                                              "invoiceNumber" String?
                                              "sellerName" String? 
                                              "invoiceDate" String?
                                              "paymentDate" String?
                                            }`;




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
    userDisplayFields : Annotation<string[]>(),
    pastMessages: Annotation<string[]>({
        default: () => [],
        reducer: (currValue, updateValue) => currValue.concat(updateValue),
    }),
});

const queryAnalysis = async (state) => {
    const llm = new ChatOpenAI({
        temperature: 0,
        model: "gpt-4.1",
        system:
            "You are an expert in PostgreSQL and vector databases. " +
            "You will receive : user query mean for construction data dataase, you need to decide if it is better to proceed with an SQL query for the database or with a vector query." +
            "return VECTOR if query is not specific. " +
            'Answer ONLY with JSON: {status: "SQL" | "VECTOR", reason: string}',
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
        system:
            `Table names and field names in a query always enclose in double quotes. 
            For WHERE statements always use ILIKE %%
            You are an expert in SQL and Prisma/Postgres. Given the Prisma schema and user question,
             write a SQL query for Postgres (do not explain, just give the SQL query)
             
             
             return in a format {
             sql: string
             reason: string
             }`,
    });

    const structuredLlm = llm.withStructuredOutput(
        z.object({
            sql : z.string().describe("raw SQL query. All columns and fields names should be in double quotes" +
                "alwyas use ILIKE %% with WHERE query."),
            reason: z.string().describe("based on what you made your decisions")

        })
    )

    const prompt = `Schema:\n${schema}\nUser query: ${state.message}\nWrite a valid PostgreSQL SQL query (no explanation).`;

    const res = await structuredLlm.invoke(["human", prompt]);
    console.log("SQLconstruct  ", res)
    return {
        ...state,
        sql: res.sql,
    };
};

const SQLformat = async(state) => {

    const llm = new ChatOpenAI({
        temperature: 0.1,
        model: "gpt-4.1",
        system:
            `You edit SQL queries. 
            
            `,


    });


    const structuredLlm = llm.withStructuredOutput(
        z.object({
            sql : z.string().describe("You are given SQL query, human request and PostgreSQL schema." +
                " Determine, which fields would be the most relevant to the user and modify SQL command accordingly" +
                "All columns and fields names should be in double quotes" +
                "For WHERE statements always use ILIKE %%" +
                "Query return should always include fields item, sum, invoiceNumber and sellerName, but include more" +
                "fields than that. "),
            reason: z.string().describe("based on what you made your decisions")
        })
    )

    const prompt = `SQL command for checking : ${state.sql}, prisma schema ${schema}`

    const res = await structuredLlm.invoke(["human", prompt]);

    console.log("SQL format ", res)

    return {
        ...state,
        sql: res.sql,
    };


}

//USE BELOW AS TEMPLATE

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
        system:
            `We need to present data to teh client. You will check the SQL query, database schema and and user query. You will rate the fields according to their 
            relevance to the user query. You will have to choose 4 most relevant fields to display to user.
                       
            `,


    });


    const structuredLlm = llm.withStructuredOutput(
        z.object({
            userDisplayFields: z
                    .array(z.enum(allowedFieldKeys)) // only those strings allowed
                    .max(4, "No more than 4 fields allowed")
                    .describe("chose 4 FieldKeys which would be best to use to display data to the user "),
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

const workflow = new StateGraph(state)
    .addNode("query-analysis", queryAnalysis)
    .addNode("sql-construct", SQLconstruct)
    .addNode("sql-format", SQLformat)
    .addNode("sql-execute", SQLexecute)
    //Here I will add node to rate of the fields by relevance and returned most 4 most relevant fileds to the query.
    .addNode("return-best-fit-fields", returnBestFitFields)
    // .addNode("sql-result-format", SQLResultFormat)
    .addNode("handle-vector", handleVector)

    .addEdge("__start__", "query-analysis")
    .addConditionalEdges("query-analysis", (state) =>
        state.status.status === "SQL" ? "sql-construct" : "handle-vector"
    )
    .addEdge("sql-construct", "sql-format")
    .addEdge("sql-format", "sql-execute")
    .addEdge("sql-execute","return-best-fit-fields")
    .addEdge("return-best-fit-fields", "__end__")
    .addEdge("handle-vector","__end__")

const graph = workflow.compile()


// -------------------- TEST -----------------------


// This below to start with but graph.ts
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
    message: `${question}`
     })


return graphResult


}



