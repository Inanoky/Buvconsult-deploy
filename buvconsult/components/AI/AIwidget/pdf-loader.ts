import fetch from "node-fetch"
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const pdf_path = "./components/AI/ChatWithPdf/Docs/Contract.pdf";
// const pdf_path = "https://reect1noxp.ufs.sh/f/HPU3nx2LdstJHhWerPP2LdstJwQhEcqDlAfU1TRvBbM9Npo8";


export async function getChunkedDocsFromPDF() {
    try {

        // const res = await fetch(pdfUrl)
        // const arrayBuffer = await res.arrayBuffer()
        // const buffer = Buffer.from(arrayBuffer)


        // const loader = new PDFLoader(pdf_path);
        const loader = new PDFLoader(pdf_path);
        const docs = await loader.load(); //So this code just loads the file
        console.log("Loaded PDF docs:", docs); // <--- SEE DOCS HERE

        const textSplitter = new RecursiveCharacterTextSplitter({
            chunkSize: 1000,
            chunkOverlap: 200,
        });

        const chunkedDocs = await textSplitter.splitDocuments(docs);
        return chunkedDocs;
    } catch (e) {
        console.error(e);
        throw new Error("PDF docs chunking failed!");
    }
}
