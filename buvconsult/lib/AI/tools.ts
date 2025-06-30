import {generateText, tool} from "ai";
import { z } from "zod";
import { prisma } from "@/app/utils/db";
// import OpenAI from "openai";
import {openai} from "@ai-sdk/openai"

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const KNOWN_COLUMNS = [
  "sellerName", "buyerName", "category", "invoiceNumber", "invoiceDate", "paymentDate",
  "sum", "item", "itemDescription", "commentsForUser"
];

export const describeSchema = tool({
  description: "Returns the list of all tables and their columns.",
  parameters: z.object({}),
  execute: async () => {
    const schema = `
      You are an assistant that can answer questions about the following database schema.
      Table and column names are case-sensitive and must be used as shown. Always use double quotes for table/column names with capital letters.
      - "User": id, email, firstName, lastName, profileImage, customerId, createdAt
      - "Site": id, name, description, subdirectory, createdAt, updatedAt, imageUrl, userId, ...
      - "Invoices": id, url, invoiceNumber, sellerName, invoiceTotalSumNoVat, invoiceTotalSumWithVat, buyerName, invoiceDate, paymentDate, isInvoice, isCreditDebitProformaOrAdvanced, uploadedAt, userId, SiteId
      - "InvoiceItems": id, date, item, quantity, unitOfMeasure, pricePerUnitOfMeasure, sum, currency, category, itemDescription, commentsForUser, isInvoice, invoiceId, siteId
    `;
    return schema;
  }
});


export const planner = tool({
  description: 'Analyze user query, break into steps to achieve a desired output',
  parameters: z.object({
    userRequest: z.string()
  }),
  execute: async ({ userRequest }) => {
    const reply = await generateText({
      model: openai("gpt-4o"),
      system: "Break down user input into logical steps to achieve it",
      prompt: userRequest
    });
    return reply.text;
  }
});



// SMART tool assessment: decide whether to use SQL (symbolic) or semantic search (embedding)
export const requestAssessment = tool({
  description: `
    Decides the best tool to answer the user's question: SQL (symbolic, column filtering) or semantic search (embedding/fuzzy).
    - If the query contains an explicit column name (like 'seller', 'buyer', 'invoice number', 'category', 'date', etc) or asks for 'all', 'total', 'group', 'sum', 'count', return { mode: "symbolic" }.
    - For broad, fuzzy, or exploratory queries with no column references, return { mode: "semantic", threshold: "loose" | "average" | "strict" }.
    Always output either { mode: "symbolic" } or { mode: "semantic", threshold }.
  `,
  parameters: z.object({ query: z.string() }),
  execute: async ({ query }) => {
    // Check for "all"/exhaustive or specific column references
    const lowerQuery = query.toLowerCase();
    const signals = [
      "all", "every", "total", "sum", "group", "count"
    ].some((kw) => lowerQuery.includes(kw));
    const columns = KNOWN_COLUMNS.some((col) => lowerQuery.includes(col.toLowerCase()) || lowerQuery.includes(col.replace(/([A-Z])/g, '_$1').toLowerCase()));
    if (signals || columns) {
      return { mode: "symbolic" };
    }
    // Default: classify semantic strictness
    let threshold: "loose" | "average" | "strict" = "average";
    if (query.length > 60 || query.match(/\b(slab|plywood|reinforcement|detailed|exact)\b/i)) {
      threshold = "strict";
    } else if (query.length < 20 || query.match(/\b(any|all|overview|summary)\b/i)) {
      threshold = "loose";
    }
    return { mode: "semantic", threshold };
  },
});

// SQL querying tool (only allows SELECT, never SELECT *)
export const queryDatabase = tool({
  description: `Queries the database with a SELECT SQL query and returns the result.
    All table/column names are case-sensitive and must be in double quotes as in the schema. Never use SELECT *. Always specify columns. Avoid columns with unsupported types (e.g., vector).`,
  parameters: z.object({ sql_query: z.string() }),
  execute: async ({ sql_query }) => {
    const trimmed = sql_query.trim();
    if (!trimmed.toLowerCase().startsWith("select")) {
      return { error: "Only SELECT queries are allowed." };
    }
    if (/\bselect\s*\*/i.test(trimmed)) {
      return { error: "Never use SELECT * — always list explicit columns as in the schema." };
    }
    try {
      const result = await prisma.$queryRawUnsafe(sql_query);
      return { rows: result };
    } catch (error: any) {
      return { error: error.message || String(error) };
    }
  },
});

// Enhanced semantic search (with limit, always returns distance, etc)
// export const semanticSearch = tool({
//   description: "Semantic search over invoice items. Finds the most relevant invoice rows for a query with configurable similarity threshold and adjustable result limit.",
//     parameters: z.object({
//     query: z.string(),
//     similarity: z.number().min(0).max(2).optional(),
//     limit: z.number().min(1).max(100).optional()
//   }),
//   execute: async ({ query, similarity = 1.1, limit = 20 }) => {
//     try {
//       const embeddingResp = await openai.embeddings.create({
//         model: "text-embedding-3-small",
//         input: query,
//       });
//       const embedding = embeddingResp.data[0].embedding;
//       const pgEmbedding = `[${embedding.join(",")}]`;
//       const result = await prisma.$queryRawUnsafe(
//         `
//         SELECT
//           "InvoiceItems".id,
//           "InvoiceItems".item,
//           "InvoiceItems".category,
//           "InvoiceItems"."itemDescription",
//           "InvoiceItems"."commentsForUser",
//           "InvoiceItems"."unitOfMeasure",
//           "InvoiceItems"."pricePerUnitOfMeasure",
//           "InvoiceItems"."quantity",
//           "InvoiceItems"."currency",
//           "InvoiceItems"."sum",
//           "Invoices"."sellerName",
//           "Invoices"."invoiceNumber",
//           "Invoices"."buyerName",
//           "Invoices"."invoiceDate",
//           "Invoices"."paymentDate",
//           "InvoiceItems".embedding <-> $1::vector AS distance
//         FROM "InvoiceItems"
//         JOIN "Invoices" ON "InvoiceItems"."invoiceId" = "Invoices".id
//         WHERE "InvoiceItems".embedding IS NOT NULL
//           AND ("InvoiceItems".embedding <-> $1::vector) < $2
//         ORDER BY "InvoiceItems".embedding <-> $1::vector
//         LIMIT $3
//         `,
//         pgEmbedding,
//         similarity,
//         limit
//       );
//       const message = result.length === limit
//         ? `Returned top ${limit} most similar rows (there may be more matches).`
//         : `Returned ${result.length} rows.`;
//       return { rows: result, message };
//     } catch (e) {
//       return { error: (e as Error).message };
//     }
//   },
// });