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



  const invoiceItemSchema = z.object({
  item: z.string(),
  quantity: z.string(),
  unitOfMeasure: z.string(),
  pricePerUnitOfMeasure: z.string(),
  sum: z.string(),
  currency: z.string(),
  category: z.string(),
  commentsForAi: z.string(),
  // Add more fields if you wish
});

  const invoiceSchema = z.object({
  invoiceNumber: z.string(),
  sellerName: z.string(),
  buyerName: z.string(),
  invoiceTotalSumNoVat: z.string(),
  invoiceTotalSumWithVat: z.string(),
  invoiceDate: z.string(),
  paymentDate: z.string(),
  isInvoice: z.boolean(),
  isCreditDebitProformaOrAdvanced: z.string(),
  items: z.array(invoiceItemSchema),
});






  const gptInvoicesSchema = z.object({
    items: z.array(invoiceSchema),
  });


  //gpt response for invoice items
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
             text: "Extract general invoice metadata and information for each item in the invoice." +
                 "Use coma as decimal separator" +
                  " If not and invoice, fill isInvoice field with `not an invoice`." +
                  " If some information not present - keep the field blank, do not halucinate." +
                  " In commentsForAi field leave a description of what this item most likely is" +
                  "in isInvoice field is invoice credit, debit or proforma" +
                 "do not use currency sign for currencies" +
                 "Determine if invoice is debit, credit, proforma, advanced or unknown and fill in isCreditDebitProformaOrAdvanced " +
                 "return dates in ISO 8601 format"
          },
        ],
      },
    ],
    text: {
      format: zodTextFormat(gptInvoicesSchema, "event"),
    },
  });


  return gptResponse.output_text;
}
