import {ChatOpenAI} from "@langchain/openai";
import {z} from "zod";
import {expandedQueriesDescribePrompt, queryExpansionSystemPrompt} from "@/components/AI/RAG/agents/prompts";



const queryExpansion = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0.5,
        model: "gpt-4.1",


    });

    const structuredLlm = llm.withStructuredOutput(
        z.object({


            answer: z.string().describe(""),
            reason: z.string().describe(""),


        })
    );

    const response = await structuredLlm.invoke([
        ["human", `
        User Query : ${state.message},
        Texts chunks : ${state.rerankedChunks}
        `],

        ["system", "" ]]);


    console.log("generalQuestion  ", response)
    return {
        ...state,
        answer : response.answer

    };
};