// "@langchain/openai" "@langchain/langgraph" "@langchain/core"
// in .env OPENAI_API_KEY=

import {Annotation, StateGraph} from "@langchain/langgraph";
import {createGraph} from "./aiDBsearcher";


// INBOX AGENT FOR A SAAS PRODUCT

const graph = createGraph();

const res = await graph.invoke({
  message: "What is my largest expense"
});