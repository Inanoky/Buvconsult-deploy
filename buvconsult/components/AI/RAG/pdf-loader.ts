import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
// ❌ Don't import WebPDFLoader at the top — it pulls in pdf-parse & pdf.worker.js

const pdf_path = "https://reect1noxp.ufs.sh/f/HPU3nx2LdstJ5gNg7F4NwUH1jiQWdkyzhZntG2g3lC8xPKsD";

export async function getChunkedDocsFromPDF(url: string) {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: "application/pdf" });

    // ✅ Dynamically import WebPDFLoader
    const { WebPDFLoader } = await import("@langchain/community/document_loaders/web/pdf");

    const loader = new WebPDFLoader(blob);
    const docs = await loader.load();

    console.log("Loaded PDF docs:", docs);

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const chunkedDocs = await textSplitter.splitDocuments(docs);
    console.log(`this is chunked docs ${JSON.stringify(chunkedDocs)}`);
    console.log(chunkedDocs[0]);

    return chunkedDocs;
  } catch (e) {
    console.error(e);
    throw new Error("PDF docs chunking failed!");
  }
}