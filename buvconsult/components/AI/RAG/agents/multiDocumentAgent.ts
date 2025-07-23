import {ChatOpenAI} from "@langchain/openai";
import {z} from "zod";
import {
    aiGeneralChoose_agent_to_callDescribePrompt,
    expandedQueriesDescribePrompt,
    queryExpansionSystemPrompt
} from "@/components/AI/RAG/agents/prompts";



const multiDocumentAgent = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0.5,
        model: "gpt-4.1",


    });

    const structuredLlm = llm.withStructuredOutput(
        z.object({


    choose_agent_to_call : z.enum(["callMetadataHelper","callVectorHelper"]).describe(""),
    reason: z.string().describe(""),


        })
    );

    const response = await structuredLlm.invoke([
        ["human", `${state.message}`],
        ["system", `` ]]);


    console.log("generalQuestion  ", response)
    return {
        ...state,
        expandedQueries: response.expandedQueries,
        queryExpansionReason: response.reason
    };
};