"use server"


import OpenAI from "openai";
import {z} from "zod";
import {zodTextFormat} from "openai/helpers/zod";
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});





export default async function gptResponse(){

    const fileUrl ="https://utfs.io/f/HPU3nx2LdstJAe15BRtVIJdLxERjSyzpwCNvQkno4gbqhHuB"
    const response = await fetch(fileUrl)
    const blob = await response.blob()
    const file = new File([blob], "invoice.pdf", { type: "application/pdf" });

    const uploadedFile = await client.files.create({
    file,
    purpose: "user_data",
    });

    const invoiceItem = z.object({
        item: z.string(),
        invoiceDate: z.string(),
        sum: z.string(),
        currency: z.string()
    })

    const responseSchema = z.object({

        items: z.array(invoiceItem)
    })


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
                        text: "Extract invoice information for each item in the invoice",
                    },
                ],
            },
        ],
        text: {
            format: zodTextFormat(responseSchema, "event")
        }
    });

    return gptResponse.output_text


}

