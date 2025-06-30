"use client";
import { useState } from "react";
import { agentAction } from "@/app/api/agent/route";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/app/components/dashboard/SubmitButtons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {backfillInvoiceEmbeddings} from "@/app/AIactions";

// Helper to render each message based on its role and structure
function renderMsgContent(msg) {
  if (Array.isArray(msg.content)) {
    return msg.content.map((c, i) =>
      typeof c === "string" ? (
        <ReactMarkdown key={i} remarkPlugins={[remarkGfm]}>{c}</ReactMarkdown>
      ) : c.type === "text" ? (
        <ReactMarkdown key={i} remarkPlugins={[remarkGfm]}>{c.text}</ReactMarkdown>
      ) : (
        <pre key={i} className="text-xs bg-gray-100 p-1 rounded overflow-x-auto">
          <code>{JSON.stringify(c, null, 2)}</code>
        </pre>
      )
    );
  }
  if (typeof msg.content === "string") {
    const trimmed = msg.content.trim();
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try {
        return (
          <pre className="text-xs bg-gray-100 p-1 rounded overflow-x-auto">
            <code>{JSON.stringify(JSON.parse(trimmed), null, 2)}</code>
          </pre>
        );
      } catch {
        return <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>;
      }
    }
    return <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>;
  }
  return (




        <pre className="text-xs bg-gray-100 p-1 rounded overflow-x-auto">
      <code>{JSON.stringify(msg.content, null, 2)}</code>
    </pre>


  );
}

export default function ChatAgent() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "user",
      content: "Ask your question"

    },
  ]);
  const [backfilling, setBackfilling] = useState(false);
  const [backfillResult, setBackfillResult] = useState(null);

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;

    // Only send the latest user message to the backend (stateless)
    const latestMessage = [{ role: "user", content: input }];
    setMessages((msgs) => [...msgs, { role: "user", content: input }]);

    // Get response based on only the new message
    const res = await agentAction(latestMessage);
    setMessages((msgs) => [...msgs, ...res]);
    setInput("");
  }

  async function handleBackfill() {
    setBackfilling(true);
    setBackfillResult(null);
    try {
      const result = await backfillInvoiceEmbeddings();
      setBackfillResult(result);
    } catch (err) {
      setBackfillResult({ error: err?.message || "Unknown error" });
    }
    setBackfilling(false);
  }

  return (
    <>
      <button
        className={`p-2 bg-blue-500 text-white rounded mb-4 ${backfilling ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={handleBackfill}
        disabled={backfilling}
      >
        {backfilling ? "Backfilling…" : "Backfill Embeddings"}
      </button>
      {backfilling && (
        <div className="mb-4 text-blue-700 font-semibold">
          Processing... Please wait.
        </div>
      )}
      {backfillResult && (
        <pre className="mb-4 text-xs bg-gray-100 p-2 rounded border border-gray-200">
          {JSON.stringify(backfillResult, null, 2)}
        </pre>
      )}
      <form onSubmit={handleSend}>
        <div className="mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`my-2 ${
                msg.role === "user"
                  ? "text-blue-800"
                  : msg.role === "assistant"
                  ? "text-green-800"
                  : msg.role === "tool"
                  ? "text-purple-800 bg-gray-50 border border-purple-200 p-2 rounded"
                  : ""
              }`}
            >
              <b>
                {msg.role === "user"
                  ? "User"
                  : msg.role === "assistant"
                  ? "Agent"
                  : msg.role === "tool"
                  ? `Tool${msg.name ? ` (${msg.name})` : ""}`
                  : msg.role}
                :
              </b>{" "}
              {renderMsgContent(msg)}
            </div>
          ))}
        </div>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about your invoices or database…"
        />
        <SubmitButton text={"Send"} type="submit" />
      </form>
    </>
  );
}
