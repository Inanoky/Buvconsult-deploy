"use server"



import {Pinecone} from "@pinecone-database/pinecone";

const pc = new Pinecone()


const indexName = 'developer-quickstart-js';

const index = pc.index(indexName).namespace("ns1");


const query = 'Shakespear';



const results = await index.searchRecords({
  query: {
    topK: 2,
    inputs: { text: query },
  },
});

console.log(JSON.stringify(results, null, 2));
