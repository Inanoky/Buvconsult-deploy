// State



import {Annotation} from "@langchain/langgraph";


type StatusType = "SQL" | "VECTOR";

type Status = {
    status: StatusType | null;
    answer?: string;
    reason?: string;
};

//Here are agent list

type AgentToCall = "call_db_agent" | "call_waste_analysis_agent" | "agent_not_needed";



export const stateDefault = Annotation.Root({
    message: Annotation<string>(),
    status: Annotation<Status>(),
    sql: Annotation<string | null>({ default: () => null }),
    fullResult: Annotation<any | null>({ default: () => null }),
    result: Annotation<any | null>({ default: () => null }),
    aiComment: Annotation<any | null>(),
    userDisplayFields : Annotation<string[]>(),
    siteId: Annotation<string[]>(),
    choose_agent_to_call: Annotation<AgentToCall>(),
    pastMessages: Annotation<string[]>({
        default: () => [],
        reducer: (currValue, updateValue) => currValue.concat(updateValue),
    }),
});





















//aiGeneral.ts generalQuestion






export const databaseSchema = `
                                            model "InvoiceItems" {
                                              id String @id @default(uuid())                                              
                                              item String? - Description : contain original description of an invoice item
                                              quantity Float? - 
                                              "unitOfMeasure" String?
                                              "pricePerUnitOfMeasure" Float?
                                              sum Float?
                                              currency String? 
                                              category String? 
                                              "itemDescription" String? - Description : detailed description of what this invoice item is
                                              "commentsForUser" String?
                                              "isInvoice" Boolean?
                                              "invoiceId" String
                                              invoice Invoices @relation(fields: [invoiceId], references: [id], onDelete: Cascade)
                                              "Site" Site? @relation(fields: [siteId], references: [id], onDelete: Cascade)
                                              "siteId" String?
                                              "invoiceNumber" String?
                                              "sellerName" String? 
                                              "invoiceDate" String? - Description : contains date of an invoice
                                              "paymentDate" String?
                                            }`;


export const allowedFieldKeysPrompt = [
  "date",
  "item",
  "quantity",
  "unitOfMeasure",
  "pricePerUnitOfMeasure",
  "sum",
  "currency",
  "category",
  "itemDescription",
  "commentsForUser",
  "isInvoice",
  "invoiceId",
  "invoiceNumber",
  "sellerName",
  "invoiceDate",
  "paymentDate"
];



//system prompts
//generalQuestion

const prompt1 =  "Your have access to the users construction cost databases. You need to pass `yes` in the " +
                        "continue field to access it." +
                        "Answer user's query, if necessary - access database"

const prompt2 =  "Your are data scientist and your job is to answer user's query. If you need access to the database," +
                        "You can call call_db_agent, which we handle SQL call for the query to retrieve necessary information "

const call_db_agentSchemPrompt1 = "If asked need to call database agent - return `yes`"

const call_db_agentSchemPrompt2 = "Choose appropriate agent to call, if not needed - pass `no` "

export const generalQuestionPrompts = prompt2
export const call_db_agentSchemPrompt = call_db_agentSchemPrompt2

//aiSQLseearcher.ts prompts

//qualityControl system prompts

const qualityControlSystemPrompt1 = "Return only an array of IDs for objects that are a good fit for the user's request."
const qualityControlSystemPrompt2 = "Return only an array of IDs for objects that fit or loosely fit for the user's request."

export const qualityControlSystemPrompt = qualityControlSystemPrompt2




//batching prompt

const qualityControlPrompt1 = "Return only an array of IDs for objects that are a good fit for the user's request."
const qualityControlPrompt2 = "Your job is to filter out all objects which are absolutely no match for user's request"

export const qualityControlPrompt = qualityControlPrompt2

//queryAnalysis prompts

const queryAnalysisSystemPrompt1 = "You are an expert in PostgreSQL and vector databases. " +
            "You will receive : user query mean for construction data dataase, you need to decide if it is better to proceed with an SQL query for the database or with a vector query." +
            "return VECTOR if query is not specific. " +
            'Answer ONLY with JSON: {status: "SQL" | "VECTOR", reason: string}'
export const queryAnalysisSystemPrompt = queryAnalysisSystemPrompt1

//SQL construct

const SQLConstructSystemPrompt1 = `You are intelligent construction project management, estimation specialsist
            and also you are postgreSQL database specialist
            
            You are given :            
            1) User question
            2) Database schema
            3) List of available categories
            
            Create an SQL request to provide best match for the user question.          
            
            
            Table names and field names in a query always enclose in double quotes. 
            For WHERE statements always use ILIKE %% `

export const SQLConstructSystemPrompt = SQLConstructSystemPrompt1

// ------------------------SQLformat------------------------------------------

const SQLFormatSystemPrompt1 = `You edit SQL queries.  `

const newSQLDescriptionPrompt1 = "You are given SQL query, human request and PostgreSQL schema." +
                " Determine, which fields would be the most relevant to the user and modify SQL command accordingly" +
                "Return adjusted SQL." +
                "All columns and fields names should be in double quotes" +
                "If user query is somehow related dates/periods - switch to searching FROM`Invoices` table " +
                "id must always be included " +
                "For WHERE statements always use ILIKE %%" +
                "Query return should always include fields item, sum, invoiceNumber and sellerName, but include more" +
                "fields than that. "

const newSQLDescriptionPrompt2 = "You are given SQL query, human request and PostgreSQL schema." +
                " Determine, which fields would be the most relevant to the user and modify SQL command accordingly" +
                "Return adjusted SQL." +
                "Always filter by siteId (provided in the user's prompts)" +
                "All columns and fields names should be in double quotes" +
                "If user query is somehow related dates/periods - switch to searching FROM`Invoices` table " +
                "id must always be included " +
                "For WHERE statements always use ILIKE %%" +
                "Query return should always include fields item, sum, invoiceNumber and sellerName, but include more" +
                "fields than that. "

const newSQLDescriptionPrompt3 = "You are given SQL query, human request and PostgreSQL schema." +

                "Always filter by siteId (provided in the user's prompts)" +
                "All columns and fields names should be in double quotes" +
                "For WHERE statements always use ILIKE %%"

export const newSQLDescriptionPrompt = newSQLDescriptionPrompt3
export const SQLFormatSystemPrompt = SQLFormatSystemPrompt1


//--------------------------------------returnBestFitFields------------------------------------------

const returnBestFitFieldsSystemPrompt1 =  `We need to present data to the client. You will check the SQL query, database schema and and user query. You will rate the fields according to their 
            relevance to the user query. You will have to choose 6 most relevant fields to display to user.`


export const returnBestFitFieldsSystemPrompt = returnBestFitFieldsSystemPrompt1

//-----------------------------------aiWasteAgent-------------------------------------------

const aiWasteAnalysisPrompt1 = `You are intelligent construction project management, estimation specialsist
            and also you are postgreSQL database specialist
            
            You are given :            
            1) User question
            2) Database schema
            3) List of available categories
            
            Create an SQL request to provide search the database for pontetially wastefull expenses such as (included
             but not limited to :
             
             1) repairs
             2) delays
             3) waiting times
             4) rental equipment
             5) fines
             6) additional charge`




export const aiWasteAnalysisPrompt = aiWasteAnalysisPrompt1


