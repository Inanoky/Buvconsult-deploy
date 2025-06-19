"use server";
import { prisma } from "@/app/utils/db";
import OpenAI from "openai";

// Initialize OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


//Code to add embeddings. Manually button in Programm for now.
export async function backfillInvoiceEmbeddings() {
  // Get InvoiceItems without embedding (limit for batching)
  const items = await prisma.$queryRawUnsafe(`
    SELECT id, item, category, "commentsForAi", "commentsForUser"
    FROM "InvoiceItems"
    WHERE embedding IS NULL
    LIMIT 500
  `);

  if (!items.length) {
    return { status: "no items to embed" };
  }

  // Process items one by one (for simplicity—can parallelize later)
  for (const row of items as any[]) {
    const inputText = [row.item, row.category, row.commentsForAi, row.commentsForUser]
      .filter(Boolean)
      .join(" ");

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