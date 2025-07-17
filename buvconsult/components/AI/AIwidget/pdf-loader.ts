import pdfParse from 'pdf-parse';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
console.log('RecursiveCharacterTextSplitter:', RecursiveCharacterTextSplitter);

// const pdf_path = "./components/AI/ChatWithPdf/Docs/Contract.pdf";
const pdf_path = "https://reect1noxp.ufs.sh/f/HPU3nx2LdstJ5gNg7F4NwUH1jiQWdkyzhZntG2g3lC8xPKsD";
console.log('WebPDFLoader:', WebPDFLoader);

export async function getChunkedDocsFromPDF() {
    try {

        const response = await fetch(pdf_path);
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: "application/pdf" });

        const loader = new WebPDFLoader(blob)

        const docs = await loader.load(); //So this code just loads the file
        console.log("Loaded PDF docs:", docs); // <--- SEE DOCS HER

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
