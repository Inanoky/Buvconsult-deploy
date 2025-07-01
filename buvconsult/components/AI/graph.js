"use server";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// graph.ts
var langgraph_1 = require("@langchain/langgraph");
var openai_1 = require("@langchain/openai");
var zod_1 = require("zod");
var db_1 = require("@/app/utils/db");
// export default async function graphQuery(question){
//Below are technical for validations.
var allowedFieldKeys = [
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
var schema = "\n                                            model \"InvoiceItems\" {\n                                              id String @id @default(uuid())\n                                              date String?\n                                              item String?\n                                              quantity Float?\n                                              \"unitOfMeasure\" String?\n                                              \"pricePerUnitOfMeasure\" Float?\n                                              sum Float?\n                                              currency String?\n                                              category String?\n                                              \"itemDescription\" String?\n                                              \"commentsForUser\" String?\n                                              \"isInvoice\" Boolean?\n                                              \"invoiceId\" String\n                                              invoice Invoices @relation(fields: [invoiceId], references: [id], onDelete: Cascade)\n                                              \"Site\" Site? @relation(fields: [siteId], references: [id], onDelete: Cascade)\n                                              \"siteId\" String?\n                                              \"invoiceNumber\" String?\n                                              \"sellerName\" String?\n                                              \"invoiceDate\" String?\n                                              \"paymentDate\" String?\n                                            }";
var state = langgraph_1.Annotation.Root({
    message: (0, langgraph_1.Annotation)(),
    status: (0, langgraph_1.Annotation)(),
    sql: (0, langgraph_1.Annotation)({ default: function () { return null; } }),
    fullResult: (0, langgraph_1.Annotation)({ default: function () { return null; } }),
    result: (0, langgraph_1.Annotation)({ default: function () { return null; } }),
    userDisplayFields: (0, langgraph_1.Annotation)(),
    pastMessages: (0, langgraph_1.Annotation)({
        default: function () { return []; },
        reducer: function (currValue, updateValue) { return currValue.concat(updateValue); },
    }),
});
var queryAnalysis = function (state) { return __awaiter(void 0, void 0, void 0, function () {
    var llm, structuredLlm, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                llm = new openai_1.ChatOpenAI({
                    temperature: 0,
                    model: "gpt-4.1",
                    system: "You are an expert in PostgreSQL and vector databases. " +
                        "You will receive : user query mean for construction data dataase, you need to decide if it is better to proceed with an SQL query for the database or with a vector query." +
                        "return VECTOR if query is not specific. " +
                        'Answer ONLY with JSON: {status: "SQL" | "VECTOR", reason: string}',
                });
                structuredLlm = llm.withStructuredOutput(zod_1.z.object({
                    status: zod_1.z.enum(["SQL", "VECTOR"]).describe("If request is a better fit for SQL or vector query"),
                    reason: zod_1.z.string().describe("Reason for the decision"),
                }));
                return [4 /*yield*/, structuredLlm.invoke(["human", "".concat(state.message)])];
            case 1:
                res = _a.sent();
                console.log("queryAnalysis  ", res);
                return [2 /*return*/, __assign(__assign({}, state), { status: { status: res.status, reason: res.reason } })];
        }
    });
}); };
var SQLplanner = function (state) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, state];
}); }); };
var SQLconstruct = function (state) { return __awaiter(void 0, void 0, void 0, function () {
    var llm, structuredLlm, prompt, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                llm = new openai_1.ChatOpenAI({
                    temperature: 0,
                    model: "gpt-4.1",
                    system: "Table names and field names in a query always enclose in double quotes. \n            For WHERE statements always use ILIKE %%\n            You are an expert in SQL and Prisma/Postgres. Given the Prisma schema and user question,\n             write a SQL query for Postgres (do not explain, just give the SQL query)\n             \n             \n             return in a format {\n             sql: string\n             reason: string\n             }",
                });
                structuredLlm = llm.withStructuredOutput(zod_1.z.object({
                    sql: zod_1.z.string().describe("raw SQL query. All columns and fields names should be in double quotes" +
                        "alwyas use ILIKE %% with WHERE query."),
                    reason: zod_1.z.string().describe("based on what you made your decisions")
                }));
                prompt = "Schema:\n".concat(schema, "\nUser query: ").concat(state.message, "\nWrite a valid PostgreSQL SQL query (no explanation).");
                return [4 /*yield*/, structuredLlm.invoke(["human", prompt])];
            case 1:
                res = _a.sent();
                console.log("SQLconstruct  ", res);
                return [2 /*return*/, __assign(__assign({}, state), { sql: res.sql })];
        }
    });
}); };
var SQLformat = function (state) { return __awaiter(void 0, void 0, void 0, function () {
    var llm, structuredLlm, prompt, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                llm = new openai_1.ChatOpenAI({
                    temperature: 0.1,
                    model: "gpt-4.1",
                    system: "You edit SQL queries. \n            \n            ",
                });
                structuredLlm = llm.withStructuredOutput(zod_1.z.object({
                    sql: zod_1.z.string().describe("You are given SQL query, human request and PostgreSQL schema." +
                        " Determine, which fields would be the most relevant to the user and modify SQL command accordingly" +
                        "All columns and fields names should be in double quotes" +
                        "For WHERE statements always use ILIKE %%" +
                        "Query return should always include fields item, sum, invoiceNumber and sellerName, but include more" +
                        "fields than that. "),
                    reason: zod_1.z.string().describe("based on what you made your decisions")
                }));
                prompt = "SQL command for checking : ".concat(state.sql, ", prisma schema ").concat(schema);
                return [4 /*yield*/, structuredLlm.invoke(["human", prompt])];
            case 1:
                res = _a.sent();
                console.log("SQL format ", res);
                return [2 /*return*/, __assign(__assign({}, state), { sql: res.sql })];
        }
    });
}); };
//USE BELOW AS TEMPLATE
// SQLexecute - this executes the SQL. fullResult - only used here, later we sanitize and final result
// will only have 4 fileds max.
var SQLexecute = function (state) { return __awaiter(void 0, void 0, void 0, function () {
    var sql, result, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sql = state.sql;
                if (!sql) {
                    return [2 /*return*/, __assign(__assign({}, state), { fullResult: "No SQL generated." })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.prisma.$queryRawUnsafe(sql)];
            case 2:
                result = _a.sent();
                console.table(result.map(function (_a) {
                    var item = _a.item, quantity = _a.quantity, pricePerUnitOfMeasure = _a.pricePerUnitOfMeasure, sum = _a.sum, sellerName = _a.sellerName, invoiceDate = _a.invoiceDate;
                    return ({
                        item: item,
                        quantity: quantity,
                        pricePerUnitOfMeasure: pricePerUnitOfMeasure,
                        sum: sum,
                        sellerName: sellerName,
                        invoiceDate: invoiceDate
                    });
                }));
                console.log("Prisma SQL query result: ".concat(JSON.stringify(result, null, 2)));
                return [2 /*return*/, __assign(__assign({}, state), { fullResult: result })];
            case 3:
                e_1 = _a.sent();
                return [2 /*return*/, __assign(__assign({}, state), { result: "SQL Error: ".concat(e_1.message) })];
            case 4: return [2 /*return*/];
        }
    });
}); };
var handleVector = function (state) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, (__assign(__assign({}, state), { result: "Sorry, your query cannot be handled via SQL. Please paraphrase or make your request more specific." }))];
    });
}); };
//Currently this is a final step.
var returnBestFitFields = function (state) { return __awaiter(void 0, void 0, void 0, function () {
    var llm, structuredLlm, prompt, res, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                llm = new openai_1.ChatOpenAI({
                    temperature: 0.1,
                    model: "gpt-4.1",
                    system: "We need to present data to teh client. You will check the SQL query, database schema and and user query. You will rate the fields according to their \n            relevance to the user query. You will have to choose 4 most relevant fields to display to user.\n                       \n            ",
                });
                structuredLlm = llm.withStructuredOutput(zod_1.z.object({
                    userDisplayFields: zod_1.z
                        .array(zod_1.z.enum(allowedFieldKeys)) // only those strings allowed
                        .max(4, "No more than 4 fields allowed")
                        .describe("chose 4 FieldKeys which would be best to use to display data to the user "),
                    reason: zod_1.z.string().describe("based on what you made your decisions")
                }));
                prompt = "SQL command for checking : ".concat(state.sql, " \n                          prisma schema ").concat(schema, "\n                          ");
                return [4 /*yield*/, structuredLlm.invoke(["human", prompt])];
            case 1:
                res = _a.sent();
                console.log("returnBestFitFields ", res);
                result = Object.fromEntries(Object.entries(state.fullResult).map(function (_a) {
                    var key = _a[0], obj = _a[1];
                    return [
                        key,
                        Object.fromEntries(Object.entries(obj).filter(function (_a) {
                            var field = _a[0];
                            return state.userDisplayFields.includes(field);
                        })),
                    ];
                }));
                return [2 /*return*/, __assign(__assign({}, state), { result: result, useDisplayFields: res.userDisplayFields })];
        }
    });
}); };
var workflow = new langgraph_1.StateGraph(state)
    .addNode("query-analysis", queryAnalysis)
    .addNode("sql-construct", SQLconstruct)
    .addNode("sql-format", SQLformat)
    .addNode("sql-execute", SQLexecute)
    //Here I will add node to rate of the fields by relevance and returned most 4 most relevant fileds to the query.
    .addNode("return-best-fit-fields", returnBestFitFields)
    // .addNode("sql-result-format", SQLResultFormat)
    .addNode("handle-vector", handleVector)
    .addEdge("__start__", "query-analysis")
    .addConditionalEdges("query-analysis", function (state) {
    return state.status.status === "SQL" ? "sql-construct" : "handle-vector";
})
    .addEdge("sql-construct", "sql-format")
    .addEdge("sql-format", "sql-execute")
    .addEdge("sql-execute", "return-best-fit-fields")
    .addEdge("return-best-fit-fields", "__end__")
    .addEdge("handle-vector", "__end__");
var graph = workflow.compile();
// -------------------- TEST -----------------------
// This below to start with but graph.ts
var res = await graph.invoke({
    message: "Return all items measured in pcs"
    // message: "Find my largest expense"
});
console.log(res);
