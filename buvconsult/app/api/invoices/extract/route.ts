"use server"


import OpenAI from "openai";
import {z} from "zod";
import {zodTextFormat} from "openai/helpers/zod";
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});





export default async function gptResponse(fileUrl) {
  const response = await fetch(fileUrl);
  const blob = await response.blob();
  const file = new File([blob], "invoice.pdf", { type: "application/pdf" });

  const uploadedFile = await client.files.create({
    file,
    purpose: "user_data",
  });

  // ... keep your zod schema code as before ...

  const invoiceItem = z.object({
    date: z.string(),
    invoiceNumber: z.string(),
    sellerName: z.string(),
    buyerName: z.string(),
    item: z.string(),
    quantity: z.string(),
    unitOfMeasure: z.string(),
    pricePerUnitOfMeasure: z.string(),
    sum: z.string(),
    currency: z.string(),
    category: z.string(),
    commentsForAi: z.string(),
    commentsForUser: z.string(),
    isInvoice: z.string(),
    invoiceId: z.string(),
  });

  const responseSchema = z.object({
    items: z.array(invoiceItem),
  });

  const gptResponse = await client.responses.create({
    model: "gpt-4.1",
    input: [
      {
        role: "user",
        content: [
          {
            type: "input_file",
            file_id: uploadedFile.id,
          },
          {
            type: "input_text",
            text: "Extract invoice information for each item in the invoice. If some information not present - keep the field blank, do not halucinate. In commentsForAi field leave a description of what this item most likely is",
          },
        ],
      },
    ],
    text: {
      format: zodTextFormat(responseSchema, "event"),
    },
  });

  return gptResponse.output_text;
}
