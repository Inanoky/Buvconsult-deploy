"use server";
import { prisma } from "@/app/utils/db";
import OpenAI from "openai";

// Initialize OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


//Code to add embeddings. Manually button in Programm for now.
export async function backfillInvoiceEmbeddings() {
  // Get InvoiceItems without embedding (limit for batching)
  const items = await prisma.$queryRawUnsafe(`
    SELECT "InvoiceItems".id,
           "InvoiceItems".item,
           "InvoiceItems".category,
           "InvoiceItems"."commentsForAi",
           "InvoiceItems"."commentsForUser",
           "Invoices"."sellerName",
           "Invoices"."invoiceNumber",
           "Invoices"."buyerName",
           "Invoices"."invoiceDate"
    FROM "InvoiceItems"
    JOIN "Invoices" ON "InvoiceItems"."invoiceId" = "Invoices".id
    WHERE "InvoiceItems".embedding IS NULL
    LIMIT 1000
  `);

  if (!items.length) {
    return { status: "no items to embed" };
  }

  // Process items one by one (for simplicity—can parallelize later)
   for (const row of items) {
    const inputText = [
      row.item ? `Item: ${row.item}` : "",
      row.category ? `Category: ${row.category}` : "",
      row.commentsForAi ? `AI Comment: ${row.commentsForAi}` : "",
      row.commentsForUser ? `User Comment: ${row.commentsForUser}` : "",
      row.sellerName ? `Seller: ${row.sellerName}` : "",
      row.invoiceNumber ? `Invoice Number: ${row.invoiceNumber}` : "",
      row.buyerName ? `Buyer: ${row.buyerName}` : "",
      row.invoiceDate ? `Invoice Date: ${row.invoiceDate}` : "",
    ].filter(Boolean).join('\n');

    // Create embedding
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: inputText,
    });
    const embedding = response.data[0].embedding; // number[]

    // Save embedding (pass as array, NOT string)
    await prisma.$executeRawUnsafe(
      `UPDATE "InvoiceItems" SET embedding = $1 WHERE id = $2`,
      embedding,
      row.id
    );
  }

  return { status: "done", count: items.length };
}