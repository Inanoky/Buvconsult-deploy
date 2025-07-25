import { DynamicStructuredTool } from "langchain/tools";
import { z } from "zod";
import {retriever} from "@/components/AI/RAG/LanggraphAgentVersion/retrievers";
import {ToolNode} from "@langchain/langgraph/prebuilt"
import {GraphState} from "@/components/AI/RAG/LanggraphAgentVersion/state";
import aiGeneral from "@/components/AI/SQL/aiGeneral";

export const retrieverTool = new DynamicStructuredTool({
  name: "retriever",
  description: "Retrieve and rerank relevant docs for a given question and site.",
  schema: z.object({
    prompt: z.string(),
    siteId: z.string(),
  }),
  async func({ prompt, siteId }) {
    return await retriever(prompt, siteId);
  },
});

export const aiGeneralLangTool = new DynamicStructuredTool({
  name: "general_sql_agent",
  description: "Run a general SQL agent for the site invoices, answering database-related natural language questions and persisting chat history.",
  schema: z.object({
    prompt: z.string(),
    siteId: z.string(),
  }),
  async func({ prompt, siteId }) {

      const result = await aiGeneral(prompt, siteId);
    // console.log("[general_sql_agent] Tool returned:", result);
    return result;

  },
});

export const tools = [retrieverTool,aiGeneralLangTool]

export const toolNode = new ToolNode<typeof GraphState.State>(tools)


