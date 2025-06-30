"use server"

// graph.ts
import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import {prisma} from "@/app/utils/db";

export default async function graphQuery(question){

const schema = `
                                            model "InvoiceItems" {
                                              id String @id @default(uuid())
                                              date String?
                                              item String?
                                              quantity Float?
                                              "unitOfMeasure" String?
                                              "pricePerUnitOfMeasure" Float?
                                              sum Float?
                                              currency String?
                                              category String?
                                              "itemDescription" String?
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
    result: Annotation<any | null>({ default: () => null }),
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
                "For WHERE statements always use ILIKE %%"),
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


const SQLexecute = async (state) => {
    const sql = state.sql;
    if (!sql) {
        return { ...state, result: "No SQL generated." };
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
        return {
            ...state,
            result,
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

const workflow = new StateGraph(state)
    .addNode("query-analysis", queryAnalysis)
    .addNode("sql-construct", SQLconstruct)
    .addNode("sql-format", SQLformat)
    .addNode("sql-execute", SQLexecute)
    // .addNode("sql-result-format", SQLResultFormat)
    .addNode("handle-vector", handleVector)

    .addEdge("__start__", "query-analysis")
    .addConditionalEdges("query-analysis", (state) =>
        state.status.status === "SQL" ? "sql-construct" : "handle-vector"
    )
    .addEdge("sql-construct", "sql-format")
    .addEdge("sql-format", "sql-execute")
    .addEdge("sql-execute", "__end__")
    .addEdge("handle-vector","__end__")

const graph = workflow.compile()


const graphResult = await graph.invoke({
            message: `${question}`
             })



// This below to start with but graph.ts
// const res = await graph.invoke({
//
//     message: "Find my largest expense"
//
// })
//
// console.log(res.sql)

return graphResult


}



