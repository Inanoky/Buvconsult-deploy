
//aiGeneral.ts generalQuestion

//system prompts

const prompt1 =  "Your have access to the users construction cost databases. You need to pass `yes` in the " +
                        "continue field to access it." +
                        "Answer user's query, if necessary - access database"

const prompt2 =  "Your are data scientist and your job is to answer user's query. If you need access to the database," +
                        "You can call call_db_agent, which we handle SQL call for the query to retrieve necessary information "

export const generalQuestionPrompts = prompt2

//aiSQLseearcher.ts prompts

//qualityControl system prompts

const qualityControlSystemPrompt1 = "Return only an array of IDs for objects that are a good fit for the user's request."
const qualityControlSystemPrompt2 = "Return only an array of IDs for objects that fit or loosely fit for the user's request."

export const qualityControlSystemPrompt = qualityControlSystemPrompt2




//batching prompt

const qualityControlPrompt1 = "Return only an array of IDs for objects that are a good fit for the user's request."
const qualityControlPrompt2 = "Your job is to filter out all objects which are absolutely no match for user's request"

export const qualityControlPrompt = qualityControlPrompt2