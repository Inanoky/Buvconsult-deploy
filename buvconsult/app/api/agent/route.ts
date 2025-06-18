// app/actions/agent.ts
"use server";

import { CoreMessage, generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import {queryDatabase} from "@/lib/AI/tools";

export async function agentAction(messages: CoreMessage[]) {
  const result = await generateText({
    model: openai("gpt-4.1"),
    tools: {

      queryDatabase,


    },
    maxSteps: 10,
    messages,
  });

  return result.response.messages;
}
