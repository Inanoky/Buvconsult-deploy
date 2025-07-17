import {getChunkedDocsFromPDF} from "@/components/AI/AIwidget/pdf-loader"
import {embedAndStoreDocs} from "@/components/AI/AIwidget/vector-store";
import {Pinecone} from "@pinecone-database/pinecone";

export async function LoadEmbeddings(url,siteId){
    try {


        const pineconeClient = new Pinecone()
        console.log("Preparing chunks from PDF file")
        const docs = await getChunkedDocsFromPDF(url)
        console.log(`Loading ${docs.length} chunkgs into pinecone`);
        await embedAndStoreDocs(pineconeClient,docs,siteId);
        console.log("Data embededded and stored in pine-cone index")


    }catch (error){
        console.error("Init client script failed", error)
    }

}