import {ChatOpenAI} from "@langchain/openai";
import {call_db_agentSchemPrompt, generalQuestionPrompts} from "@/components/AI/SQL/Prompts";
import {z} from "zod";


const template = async (state) => {

    const llm = new ChatOpenAI({
        temperature: 0.5,
        model: "gpt-4.1",


    });

    const structuredLlm = llm.withStructuredOutput(
        z.object({
            answer: z.string().describe("Give your answer"),
            choose_agent_to_call : z.enum(["call_db_agent","call_waste_analysis_agent","no"]).describe(call_db_agentSchemPrompt),
            reason: z.string().describe("Give your reason for your decision"),
            message: z.string().describe("prompt for next agent")

        })
    );

    const response = await structuredLlm.invoke([
        ["human", `${state.message}`],
        ["system",generalQuestionPrompts ]]);


    console.log("generalQuestion  ", response)
    return {
        ...state,
        question: question,
        message: response.message,
        siteId: siteId,
        choose_agent_to_call : response.choose_agent_to_call,
        aiComment : response.answer
        //Here we can store User message I think
    };
};

//--------------------aiGeneral.ts---------------------------------

const aiGeneralSystemPrompt22_07 = "prompt"

export const aiGeneralSystemPrompt = aiGeneralSystemPrompt22_07

const aiGeneralChoose_agent_to_callDescribePrompt22_07 = "prompt"

export const aiGeneralChoose_agent_to_callDescribePrompt = aiGeneralChoose_agent_to_callDescribePrompt22_07

//--------------------queryExpansion.ts-----------------------------------

const queryExpansionSystemPrompt22_07 = "prompt"

export const queryExpansionSystemPrompt = queryExpansionSystemPrompt22_07

const expandedQueriesDescribePrompt22_07 = "prompt"

export const expandedQueriesDescribePrompt = expandedQueriesDescribePrompt22_07