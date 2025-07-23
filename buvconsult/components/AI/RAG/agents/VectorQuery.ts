"use server"

import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { ChatOpenAI } from "@langchain/openai";
import {generalQuestionPrompts} from "@/components/AI/SQL/Prompts";

const pc = new Pinecone();
const indexName = 'documents';

// Create embeddings instance (optionally specify model)
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large" // Uncomment to use v3 small
  // model: "text-embedding-ada-002" // Or use ada-002
  // apiKey: process.env.OPENAI_API_KEY, // Optional, will use env by default
});



const vectorQuery = async (state) => {

    const index = pc.index(indexName).namespace(state.siteId);

    const responses = await Promise.all(
        state.expandedQueries.map(async (query) => {

             const vector = await embeddings.embedQuery(state.query);

              const results = await index.query({
                topK: 10,
                vector,
                includeMetadata: true,
              })

            return results; //So this will be a new array of all chunks.

        })




    );

    return {
        ...state,
        combinedChunks: responses
    }

}
