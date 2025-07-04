"use client";
import { useState, useRef } from "react";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, SendHorizonal } from "lucide-react";
import aiGeneral from "@/components/AI/aiGeneral";
import { Separator } from "@/components/ui/separator";

// -- Table modal component --
function TableModal({ data, onClose }) {
  if (!Array.isArray(data) || data.length === 0) return null;
  const headers = Object.keys(data[0]);
  const sumTotal = data.reduce((acc, row) => acc + (parseFloat(row.sum) || 0), 0);

  return (
    <div className="fixed inset-0 bg-black/40 z-[99] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-8xl w-full mx-4 relative">
        <button
          className="absolute right-4 top-4 text-3xl text-gray-700 hover:text-red-500 font-bold"
          onClick={onClose}
        >×</button>
        <h3 className="mb-4 text-2xl font-bold">RESULTS</h3>
        <div className="overflow-x-auto max-h-[80vh]">
          <table className="min-w-full border border-gray-300 text-base">
            <thead>
              <tr>
                {headers.map((h) => (
                  <th key={h} className="border-b px-4 py-3 text-left font-semibold bg-gray-50">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  {headers.map((h) => (
                    <td key={h} className="border-b px-4 py-2">{row[h]}</td>
                  ))}
                </tr>
              ))}
              {/* Subtotal row */}
              <tr className="bg-gray-100 font-bold">
                {headers.map((h) =>
                  h === "sum" ? (
                    <td key={h} className="px-4 py-2 border-t border-b border-gray-400 text-right">
                      Subtotal: {sumTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                  ) : (
                    <td key={h} className="px-4 py-2 border-t border-b border-gray-400"></td>
                  )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default function AIChatGeneral() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [expandedData, setExpandedData] = useState(null); // For modal

  const inputRef = useRef();

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    setInput("");
    try {
      const result = await aiGeneral(input);
      // Store as string
      const botMsg = {
        sender: "bot",
        text: typeof result.answer === "string" ? result.answer : JSON.stringify(result.answer) || "Sorry, I didn't get that.",
      };
      setMessages((msgs) => [...msgs, botMsg]);
    } catch (e) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Something went wrong." },
      ]);
    }
    setLoading(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) handleSend();
  };

  // Renders message, checks for JSON array and shows hyperlink if valid
  function renderMessage(msg) {
    if (
      msg.sender === "bot" &&
      typeof msg.text === "string"
    ) {
      try {
        const data = JSON.parse(msg.text);
        if (Array.isArray(data) && typeof data[0] === "object") {
          return (
            <span>
              <Bot size={18} className="inline mr-2" />
              <button
                className="text-blue-700 underline hover:text-blue-900"
                onClick={() => setExpandedData(data)}
              >
                View data table
              </button>
            </span>
          );
        }
      } catch {}
    }
    // Otherwise, render as plain text
    return (
      <span>
        {msg.sender === "user" ? <User size={18} className="inline mr-2" /> : <Bot size={18} className="inline mr-2" />}
        {msg.text}
      </span>
    );
  }

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition"
          aria-label="Open AI Assistant Chat"
        >
          <Bot size={28} />
        </button>
      )}

      {/* Chat Widget */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] max-w-[96vw] rounded-2xl shadow-2xl bg-white border border-gray-200 flex flex-col">
          <Card className="w-full rounded-2xl shadow-none border-0 bg-transparent">
            <CardHeader className="flex items-center justify-between py-3 px-4 bg-blue-600 text-white rounded-t-2xl">
              <span className="text-lg font-semibold">AI Assistant</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-gray-200 transition"
                aria-label="Close Chat"
              >
                ×
              </button>
            </CardHeader>
            <Separator />
            <ScrollArea className="h-80 p-4">
              <div className="flex flex-col gap-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`rounded-2xl px-4 py-2 max-w-[70%] ${
                        msg.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      {renderMessage(msg)}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-900 rounded-2xl px-4 py-2 max-w-[70%] animate-pulse">
                      <Bot size={18} className="inline mr-2" /> ...
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <Separator />
            <CardFooter className="flex gap-2">
              <Input
                ref={inputRef}
                placeholder="Type your message…"
                value={input}
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button onClick={handleSend} disabled={loading || !input.trim()} size="icon">
                <SendHorizonal size={20} />
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Modal for data table */}
      {expandedData && (
        <TableModal data={expandedData} onClose={() => setExpandedData(null)} />
      )}
    </>
  );
}
