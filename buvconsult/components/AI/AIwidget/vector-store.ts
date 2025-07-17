
import {OpenAIEmbeddings} from "@langchain/openai";
import {Pinecone, Pinecone as PineconeClient} from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";




export async function embedAndStoreDocs(

  client: PineconeClient,
  // @ts-ignore docs type error
  docs: Document<Record<string, any>>[],
  siteId : string
  // siteId: string,
  // documentType : string
) {

  console.log("this")
  /*create and store the embeddings in the vectorStore*/
  try {
    const embeddings = new OpenAIEmbeddings({model: "text-embedding-3-large"});
    const index = client.Index("documents")

    //embed the PDF documents. This is where we store to Pinecone info
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      namespace: siteId,
      textKey: 'text', // metadata key used during treiveing the information from pinecone

    });
  } catch (error) {
    console.log('error ', error);
    throw new Error('Failed to load your docs !');
  }
}

