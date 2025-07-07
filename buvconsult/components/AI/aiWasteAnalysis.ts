"use server"


import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { ToolNode } from '@langchain/langgraph/prebuilt';
import {getCoolestCities} from "@/lib/AI/tools";
import graphQuery from "@/components/AI/aiSQLsearcher";
import {generalQuestionPrompts} from "@/components/AI/Prompts";

export default async function aiGeneral(question){




const state = Annotation.Root({
    message: Annotation<string>(),
    pastMessages: Annotation<string[]>({
        default: () => [],
        reducer: (currValue, updateValue) => currValue.concat(updateValue),
    }),
    answer: Annotation<string>(),
    aiComment: Annotation<string>(),

});



const wastAnalysis = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0,
        model: "gpt-4.1",
        system: "You are data scientist which analyzes construction invoice data for potential waste" +
            "Search itemDescription for the following keywords :" +
            "repairs," +
            " loss," +
            " waiting, additional time, delay" +
            " fine," +
            " DHL (this is express delivery, so can be considered a waste)," +
            "express delivery," +
            "rental materials," +
            "" +
            " "
                });

    const structuredLlm = llm.withStructuredOutput(
        z.object({
            answer: z.string().describe("Just say Riga"),
        })
    );

    const res = await structuredLlm.invoke(["human", `Say Riga`]);

    console.log("coolestCity  ", res)
    return {
        ...state,
        answer : res.answer
    };
};



const SQLquery = async (state) => {


    const response = await graphQuery(state.message)

    //I think maybe here I actually need some like conclusion?

    return {
        ...state,
        answer : response.result,
        aiComment: "This is your response"
    }



};





const workflow = new StateGraph(state)

    .addNode("generalQuestion", generalQuestion)
    .addNode("SQLquery", SQLquery)
    .addEdge("__start__", "generalQuestion")
    .addConditionalEdges("generalQuestion", (state) =>
        state.call_db_agent === "yes" ? "SQLquery" : "__end__"
    )
    .addEdge("SQLquery","__end__")




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



