"use client";
import { useState } from "react";
import { agentAction } from "@/app/api/agent/route";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/app/components/dashboard/SubmitButtons";

// Helper to render each message based on its role and structure
function renderMsgContent(msg) {
  if (Array.isArray(msg.content)) {
    // Sometimes content is an array (from tool/function calling)
    return msg.content.map((c, i) =>
      typeof c === "string" ? (
        <span key={i}>{c}</span>
      ) : c.type === "text" ? (
        <span key={i}>{c.text}</span>
      ) : (
        // Show any non-text content as pretty JSON
        <pre key={i} className="text-xs bg-gray-100 p-1 rounded">
          {JSON.stringify(c, null, 2)}
        </pre>
      )
    );
  }
  // Otherwise, it's a simple string
  return msg.content;
}

export default function ChatAgent() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "user",
      content:
        "I would like you to query database to answer my questions. Check all the tables and columns names. When I aks questions - convert it to SQL request and, analyze it and repply back to me",
    },
  ]);

  async function handleSend(e) {
    e.preventDefault();
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    // Call the server action, which should return ALL new messages from the agent (including tool/assistant steps)
    const res = await agentAction(newMessages);
    setMessages([...newMessages, ...res]);
    setInput("");
  }

  // Render with strong styling for clarity
  return (
    <>
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
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <SubmitButton text={"Send"} type="submit" />
      </form>
    </>
  );
}
