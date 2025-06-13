"use server"


import OpenAI from "openai";
import {z} from "zod";
import {zodTextFormat} from "openai/helpers/zod";
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});





export default async function gptResponseInvoices(fileUrl) {
  const response = await fetch(fileUrl);
  const blob = await response.blob();
  const file = new File([blob], "invoice.pdf", { type: "application/pdf" });

  const uploadedFile = await client.files.create({
    file,
    purpose: "user_data",
  });



  //Schema for invoices

  const invoices = z.object({

      invoiceNumber: z.string(),
      sellerName: z.string(),
      invoiceDate: z.string(),
      paymentDate: z.string(),
      isInvoice: z.boolean(),
      isCreditDebitOrProforma: z.string(),
    })

  const invoiceResponseSchema = z.object({
    items: z.array(invoices)
  })




  //gpt response for invoices
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
             text: "Check if uploaded documents is invoice or not. Update isInvoice accordingly. Extract required field. " +
                 "For isCreditDebitOrProforma fill in Credit, Debit (if not credit or proforma), or Proforma accordingly " +
                 "return dates in ISO 8601 format",

          },
        ],
      },
    ],
    text: {
      format: zodTextFormat(invoiceResponseSchema, "event"),
    },
  });

  return gptResponse.output_text;
}
