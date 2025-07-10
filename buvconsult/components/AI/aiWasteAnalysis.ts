"use server"


import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { ToolNode } from '@langchain/langgraph/prebuilt';
import {getCoolestCities} from "@/lib/AI/tools";
import graphQuery from "@/components/AI/aiSQLsearcher";
import {aiWasteAnalysisPrompt, databaseSchema, generalQuestionPrompts} from "@/components/AI/Prompts";
import {constructionCategories} from "@/components/AI/ConstructionCategories";



//Here to pass siteId and question
export default async function aiWasteAnalysis(question){




const state = Annotation.Root({
    message: Annotation<string>(),
    pastMessages: Annotation<string[]>({
        default: () => [],
        reducer: (currValue, updateValue) => currValue.concat(updateValue),
    }),
    answer: Annotation<string>(),
    aiComment: Annotation<string>(),

});



const wasteAnalysis = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0,
        model: "gpt-4.1",
        system: aiWasteAnalysisPrompt
                });

     const structuredLlm = llm.withStructuredOutput(
        z.object({
            sql : z.string().describe("raw SQL query. All columns and fields names should be in double quotes" +
                "alwayss use ILIKE %% with WHERE query."),
            reason: z.string().describe("based on what you made your decisions")

        })
    )

    const prompt = `Prisma Schema:\n${databaseSchema}
                            \nUser question: ${state.message}\n
                            Write a valid PostgreSQL SQL query (no explanation).
                            categories : ${JSON.stringify(constructionCategories)}`;

    const res = await structuredLlm.invoke(["human", prompt]);


    console.log("aiWestAnalysis  ", res)
    return {
        ...state,
        sql: res.sql,
    };
};






const workflow = new StateGraph(state)

    .addNode("wasteAnalysis", wasteAnalysis)
    .addEdge("__start__", "wasteAnalysis")
    .addEdge("wasteAnalysis","__end__")




const graph = workflow.compile()


// -------------------- TEST -----------------------


// This below to start with bun aiSQLsearcher.ts
// const res = await graph.invoke({
//
//     message: "How are you?"
//     // message: "Find my largest expense"
//
// })
//
// console.log(res)

// -------------------- RUN -----------------------


const graphResult = await graph.invoke({
    message: question
     })

console.log(graphResult)
return graphResult


}



