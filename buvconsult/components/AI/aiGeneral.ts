"use server"


import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { ToolNode } from '@langchain/langgraph/prebuilt';
import {getCoolestCities} from "@/lib/AI/tools";
import graphQuery from "@/components/AI/aiSQLsearcher";
import {generalQuestionPrompts} from "@/components/AI/Prompts";

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
    call_db_agent: Annotation<string>(),
    aiComment: Annotation<string>(),

});

const generalQuestion = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0.5,
        model: "gpt-4.1",
        system: generalQuestionPrompts

    });

    const structuredLlm = llm.withStructuredOutput(
        z.object({
            answer: z.string().describe("Give your answer"),
            call_db_agent : z.enum(["yes","no"]).describe("If asked need to call database agent - return `yes`"),
            reason: z.string().describe("Give your reason for your decision")
        })
    );

    const res = await structuredLlm.invoke(["human", `${state.message}`]);

    console.log("generalQuestion  ", res)
    return {
        ...state,
        call_db_agent : res.call_db_agent,
        aiComment : res.answer
        //Here we can store User message I think
    };
};


const summarization = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0,
        model: "gpt-4.1",
        system: "You are data scientist which summarizes the data "
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



