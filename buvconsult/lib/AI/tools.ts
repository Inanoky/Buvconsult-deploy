import { tool } from "ai"; // Or your AI agent framework
import { z } from "zod";
import {prisma} from "@/app/utils/db";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export const queryDatabase = tool({
  description: "Queries the database with a SELECT SQL query and returns the result." +
      "All SQL table and column names are lowercase snake_case (e.g., invoice_items, invoice_total_sum_with_vat)." +
      " Never use camelCase, PascalCase, or quotes.",
  parameters: z.object({ sql_query: z.string() }),
  execute: async ({ sql_query }) => {
    const trimmed = sql_query.trim().toLowerCase();
    if (!trimmed.startsWith("select")) {
      return { error: "Only SELECT queries are allowed." };
    }
    try {
      // Run the SELECT query and return results
      const result = await prisma.$queryRawUnsafe(sql_query);
      return { rows: result };
    } catch (error: any) {
      return { error: error.message || String(error) };
    }
  },
});

export const describeSchema = tool({
  description: "Returns the list of all tables and their columns.",
  parameters: z.object({}),
  execute: async () => {
    const schema = `
              You are an assistant that can answer questions about the following database schema.
              **Table and column names are case-sensitive and must be used as shown. Always use double quotes for table names with capital letters.**
              
              - **"User"**
                - id (String), email (String), firstName (String), lastName (String), profileImage (String), customerId (String, optional), createdAt (DateTime)
              - **"Site"**
                - id (String), name (String), description (String), subdirectory (String), createdAt (DateTime), updatedAt (DateTime), imageUrl (String, optional), userId (String, FK), etc.
              - **"Invoices"**
                - id (String), url (String), invoiceNumber (String?), sellerName (String?), invoiceTotalSumNoVat (Float?), invoiceTotalSumWithVat (Float?), buyerName (String?), invoiceDate (String?), paymentDate (String?), isInvoice (Boolean?), isCreditDebitProformaOrAdvanced (String?), uploadedAt (DateTime), userId (String, FK), SiteId (String, FK)
              - **"InvoiceItems"**
                - id (String), date (String?), item (String?), quantity (Float?), unitOfMeasure (String?), pricePerUnitOfMeasure (Float?), sum (Float?), currency (String?), category (String?), commentsForAi (String?), commentsForUser (String?), isInvoice (Boolean?), invoiceId (String, FK), siteId (String, FK)
              - ... (etc. for Subscription, Post)
              `
    return schema ;
  }
});

export const semanticSearch = tool({
  description: "Semantic search over invoice items. Finds the most relevant invoice rows for a query.",
  parameters: z.object({ query: z.string() }),
  execute: async ({ query }) => {
    try {
      // 1. Create embedding for the query
      const embeddingResp = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: query,
      });
      const embedding = embeddingResp.data[0].embedding;
      // 2. Query for closest rows with expanded fields
      const result = await prisma.$queryRawUnsafe(
        `
        SELECT "InvoiceItems".id,
               "InvoiceItems".item,
               "InvoiceItems".category,
               "InvoiceItems"."commentsForAi",
               "InvoiceItems"."commentsForUser",
               "Invoices"."sellerName",
               "Invoices"."invoiceNumber",
               "Invoices"."buyerName",
               "Invoices"."invoiceDate",
               embedding <-> $1 AS distance
        FROM "InvoiceItems"
        JOIN "Invoices" ON "InvoiceItems"."invoiceId" = "Invoices".id
        WHERE "InvoiceItems".embedding IS NOT NULL
        ORDER BY embedding <-> $1
        LIMIT 5
        `,
        embedding // passed as a parameter, avoids string interpolation
      );
      return { rows: result };
    } catch (e) {
      return { error: e.message };
    }
  },
});