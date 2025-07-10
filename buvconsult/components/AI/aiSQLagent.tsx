"use server"

// aiSQLagent.tsx

import {  StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

import {constructionCategories} from "@/components/AI/ConstructionCategories";
import {
    allowedFieldKeysPrompt,
    databaseSchema,

    SQLConstructSystemPrompt,
    SQLFormatSystemPrompt, stateDefault
} from "@/components/AI/Prompts";

export default async function aiSQLAgent(stateReceived){

const state = stateDefault

//Below are technical for validations.

const allowedFieldKeys = allowedFieldKeysPrompt


const schema = databaseSchema






// So below will be an agent




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

    const response = await structuredLlm.invoke(["human", prompt]);

    //So here we just return SQL. Basically we can pass it on to aiDBsearcher

     console.log("SQLconstruct  : ", response)
    return {
        ...state,
        sql: response.sql,
    };
};









const workflow = new StateGraph(state)


    .addNode("sql-construct", SQLconstruct)
    .addEdge("__start__", "sql-construct")
    .addEdge("sql-construct", "__end__")


const graph = workflow.compile()




const graphResult = await graph.invoke({

    ...stateReceived
     })


return graphResult


}



