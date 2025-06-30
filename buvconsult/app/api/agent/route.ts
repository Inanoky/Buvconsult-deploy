// app/actions/agent.ts
"use server";

import { CoreMessage, generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import {queryDatabase, describeSchema, semanticSearch, requestAssessment, planner} from "@/lib/AI/tools";

export async function agentAction(messages: CoreMessage[]) {
  const result = await generateText({
    model: openai("gpt-4o-mini"),
    system: 'You are a construction assistant which helps user to analyze and retrieve information from database.' +
        'Always start from using planner tool ' +
        'Below is table definition :' +
        '' +
        'create table public."InvoiceItems" (\n' +
        '  id text not null,\n' +
        '  date text null,\n' +
        '  item text null,\n' +
        '  currency text null,\n' +
        '  category text null,\n' +
        '  "commentsForUser" text null,\n' +
        '  "invoiceId" text not null,\n' +
        '  "unitOfMeasure" text null,\n' +
        '  "siteId" text null,\n' +
        '  "isInvoice" boolean null,\n' +
        '  sum double precision null,\n' +
        '  "pricePerUnitOfMeasure" double precision null,\n' +
        '  quantity double precision null,\n' +
        '  "itemDescription" text null,\n' +
        '  "invoiceDate" text null,\n' +
        '  "invoiceNumber" text null,\n' +
        '  "paymentDate" text null,\n' +
        '  "sellerName" text null,\n' +
        '  constraint InvoiceItems_pkey primary key (id),\n' +
        '  constraint InvoiceItems_invoiceId_fkey foreign KEY ("invoiceId") references "Invoices" (id) on update CASCADE on delete CASCADE,\n' +
        '  constraint InvoiceItems_siteId_fkey foreign KEY ("siteId") references "Site" (id) on update CASCADE on delete CASCADE\n' +
        ') TABLESPACE pg_default;' +



        'You will receive query from user, which could be extensive (find me ALL cost related to "Company name" - for this' +
        'you need to return all results which match. Use queryDatabase tools for this' +
        '' +
        'For queries which are not extensive, like "Find me some waste in my expenses?" try to use semantic search with semanticSearch tool' +
        'or combined approach. ',
    tools: {
      // describeSchema,
      planner,
      queryDatabase,
      // semanticSearch,



    },
    maxSteps: 10,
    messages,
  });

  return result.response.messages;
}
