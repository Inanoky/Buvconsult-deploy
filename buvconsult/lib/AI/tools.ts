import { tool } from "ai"; // Or your AI agent framework
import { z } from "zod";
import {prisma} from "@/app/utils/db";

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
