"use server"

import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { ChatOpenAI } from "@langchain/openai";
import {generalQuestionPrompts} from "@/components/AI/Prompts";

const pc = new Pinecone();
const indexName = 'documents';

// Create embeddings instance (optionally specify model)
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large" // Uncomment to use v3 small
  // model: "text-embedding-ada-002" // Or use ada-002
  // apiKey: process.env.OPENAI_API_KEY, // Optional, will use env by default
});
export async function talkToDocuments(prompt,siteId){





              const vector = await embeddings.embedQuery(prompt);

              // 2. Query Pinecone using the embedding

              const index = pc.index(indexName).namespace(siteId);
              const results = await index.query({
                topK: 15,
                vector,
                includeMetadata: true,
              });



            console.log(JSON.stringify(results,null,2))

            // Generating response :

            const context = results.matches
                .map(match => match.metadata?.text)

            const llm = new ChatOpenAI({
              model: "gpt-4.1",
              temperature: 0.1,
              // other params...
            });

            console.log(context)


            const aiMsg = await llm.invoke([

                    ["human", "Use the following pieces of context to answer the question at the end." +
                    "Analyze context and make a conclusion in simple terms\n" +
                    "If you don't know the answer, just say that you don't know, don't try to make up an answer.\n" +
                    "Provide reason for your answer" +

                    `Context : ${context}
                    Question : ${prompt}` +
                    ""]])






            console.log(JSON.stringify(`This is an AI resposne : ${aiMsg.content}`));


return aiMsg.content

}