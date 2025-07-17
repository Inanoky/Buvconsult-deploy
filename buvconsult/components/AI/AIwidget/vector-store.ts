
import {OpenAIEmbeddings} from "@langchain/openai";
import {Pinecone, Pinecone as PineconeClient} from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";




export async function embedAndStoreDocs(
  client: PineconeClient,
  // @ts-ignore docs type error
  docs: Document<Record<string, any>>[]
) {
  /*create and store the embeddings in the vectorStore*/
  try {
    const embeddings = new OpenAIEmbeddings({model: "text-embedding-3-large"});
    const index = client.Index("test");

    //embed the PDF documents. This is where we store to Pinecone info
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      textKey: 'text', // metadata key used during treiveing the information from pinecon
    });
  } catch (error) {
    console.log('error ', error);
    throw new Error('Failed to load your docs !');
  }
}