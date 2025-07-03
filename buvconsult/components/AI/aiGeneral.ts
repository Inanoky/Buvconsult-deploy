"use server"


import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { ToolNode } from '@langchain/langgraph/prebuilt';
import {getCoolestCities} from "@/lib/AI/tools";
import graphQuery from "@/components/AI/aiSQLsearcher";

export default async function aiGeneral(question){

const tools = [getCoolestCities]
const toolNode = new ToolNode(tools)


const state = Annotation.Root({
    message: Annotation<string>(),
    pastMessages: Annotation<string[]>({
        default: () => [],
        reducer: (currValue, updateValue) => currValue.concat(updateValue),
    }),
    answer: Annotation<string>(),
    continue: Annotation<string>(),
});

const generalQuestion = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0.5,
        model: "gpt-4.1",
        system:
            "Your are database specialist and have access to construction database"
    });

    const structuredLlm = llm.withStructuredOutput(
        z.object({
            answer: z.string().describe("Give your answer"),
            continue : z.enum(["yes","no"]).describe("If asked to fetch info from database - return `yes` otherwise 'no`")
        })
    );

    const res = await structuredLlm.invoke(["human", `${state.message}`]);

    console.log("generalQuestion  ", res)
    return {
        ...state,
        continue : res.continue,
        answer : res.answer
    };
};


const coolestCity = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0,
        model: "gpt-4.1",
        system:
            "You say Riga"
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

    return {
        ...state,
        answer : response.result
    }



};





const workflow = new StateGraph(state)

    .addNode("generalQuestion", generalQuestion)
    .addNode("SQLquery", SQLquery)
    .addEdge("__start__", "generalQuestion")
    .addConditionalEdges("generalQuestion", (state) =>
        state.continue === "yes" ? "SQLquery" : "__end__"
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



