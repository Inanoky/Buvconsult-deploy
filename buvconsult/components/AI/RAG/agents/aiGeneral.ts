import {ChatOpenAI} from "@langchain/openai";
import {z} from "zod";
import {aiGeneralChoose_agent_to_callDescribePrompt, aiGeneralSystemPrompt} from "@/components/AI/RAG/agents/prompts";


const queryAnalysis = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0.5,
        model: "gpt-4.1",

    });

    const structuredLlm = llm.withStructuredOutput(
        z.object({

            choose_agent_to_call : z.enum(["singleDocumentAgent","multiDocumentAgent","no"]).describe(aiGeneralChoose_agent_to_callDescribePrompt),
            reason: z.string().describe("Give your reason for your decision"),


        })
    );

    const response = await structuredLlm.invoke([
        ["human", `${state.message}`],
        ["system", aiGeneralSystemPrompt ]]);


    console.log("generalQuestion  ", response)
    return {
        ...state,
        choose_agent_to_call: response.choose_agent_to_call,
        queryAnalysisReason: response.reason
    };
};
