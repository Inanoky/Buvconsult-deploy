import {ChatOpenAI} from "@langchain/openai";

export const streamingModel = new ChatOpenAI({
    verbose: true,
    temperature: 0


})

export const nonStreamModel = new ChatOpenAI({

    verbose: true,
    temperature: 0,

})

