import {Pinecone} from "@pinecone-database/pinecone";


const documentId = "69277515-088a-41f3-8fbb-e2673f01b0f5"
const siteId = "48f39d7c-9d7f-4c6e-bb12-b20a8d7e7315"

const pc = new Pinecone()


const index = pc.index("documents")


const fetchResult = await index.namespace(siteId).fetch([documentId])
// console.log(JSON.stringify(fetchResult))

console.log(fetchResult.records[documentId].metadata.chunkCount)