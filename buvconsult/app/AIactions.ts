"use server"




import {Agent, run, tool} from '@openai/agents';
import {z} from "zod";

export default async function aIAgent(){

        const myName = tool({
                name: 'myName',
                description: 'my name is Slava, use my name',
                parameters: z.object({}),
                async execute({}){
                        return 'My name'
                }

        })




        const agent = new Agent({
        name: 'Assistant',
        instructions: 'You are a helpful assistant',

        tools: [myName]
        });

        const result = await run(
          agent,
          'Write a haiku about pizza and use my Name.',
        );
        console.log(result.finalOutput);



    return result.finalOutput



}


const queryDatabase = tool({
  description: "queries the database with sql and returns the result",
  parameters: z.object({ sql_query: z.string() }),
  execute: async ({ sql_query }) => {
    // we can now read the agent context from the ALS store
    const agent = agentContext.getStore();
    if (!agent) throw new Error("No agent found");

    console.log(`running query: ${sql_query}`);
    try {
      const connectionString = agent.getEnv().HYPERDRIVE.connectionString;
      const client = new Client({ connectionString });
      await client.connect();

      const result = await client.query(sql_query);
      await client.end();
      return JSON.stringify(result);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
});
