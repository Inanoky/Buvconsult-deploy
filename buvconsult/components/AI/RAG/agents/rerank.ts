import {ChatOpenAI, OpenAIEmbeddings} from "@langchain/openai";
import {z} from "zod";
import {expandedQueriesDescribePrompt, queryExpansionSystemPrompt} from "@/components/AI/RAG/agents/prompts";
import {Pinecone} from "@pinecone-database/pinecone";


const pc = new Pinecone();
const indexName = 'documents';

// Create embeddings instance (optionally specify model)
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large" // Uncomment to use v3 small
  // model: "text-embedding-ada-002" // Or use ada-002
  // apiKey: process.env.OPENAI_API_KEY, // Optional, will use env by default
});




const rerank = async (state) => {

    const rerankingModel = 'bge-reranker-v2-m3';

    const rerankOptions = {
          topN: 15,
          rankFields: ['chunk_text'],
          returnDocuments: true,
          parameters: {
            truncate: 'END'
          },
        };

    const rankedResults = await pc.inference.rerank(
          rerankingModel,
          state.userQuery,
          state.combinedChunks,
          rerankOptions
        );


    return {
        ...state,
        rerankedChunks: rankedResults
    }
    }
