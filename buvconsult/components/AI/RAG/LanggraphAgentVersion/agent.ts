import {ChatOpenAI} from "@langchain/openai";

const tools = [retrieverTool];

const model = new ChatOpenAI({
  model: "gpt-4.1", // or your preferred model
  temperature: 0.1,
  streaming: true,
}).bindTools(tools); // Now the LLM can “see” your retriever tool!