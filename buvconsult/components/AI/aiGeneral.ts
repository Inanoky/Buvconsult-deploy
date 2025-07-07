"use server"


import { Annotation, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { ToolNode } from '@langchain/langgraph/prebuilt';
import {getCoolestCities} from "@/lib/AI/tools";
import graphQuery from "@/components/AI/aiSQLsearcher";
import {generalQuestionPrompts} from "@/components/AI/Prompts";
import {prisma} from "@/app/utils/db";
import {requireUser} from "@/app/utils/requireUser";
import { MemorySaver } from "@langchain/langgraph";

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





const SQLquery = async (state) => {


    const response = await graphQuery(question) //Passing just user question to SQL agent

    //I think maybe here I actually need some like conclusion?

    return {
        ...state,
        answer : response.result,
        aiComment: response.aIComment
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



const checkpointer = new MemorySaver();
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

//fetch info from database :

// const conversation = await prisma.
//
//
// where: { userId: someUserId },
// });

//load from database


//Checking if user is authenticated
const user = await requireUser()


//Fetching conversation from database

let conversation = await prisma.aIconversation.findUnique({
    where: {userId: user.id}
})

//If no conversation found, we create an empty array, if exist, we load it to history

let history = conversation?.thread || []; //If conversation is emtpy, we create history - an empty array


//Invoking graph, passing history + latest question

const graphResult = await graph.invoke({
    message: `history conversation is here : ${JSON.stringify(history)} and the current question is ${question}`,

     })


//We record latest user question and latest gpt reply to the newEntry object
const newEntry = {user : question, GPT : graphResult.aiComment}


//We push latest entry to the end of the history array
history.push(newEntry)

//Now we need to send to database

if (conversation) {
    await prisma.aIconversation.update({
        where: {userId:user.id},
        data: {thread: history}
    }) } else{
    await prisma.aIconversation.create({
        data: {
            userId: user.id,
            thread: [newEntry]
        }
    })
}




console.log(history)

console.log(graphResult)

return graphResult


}



