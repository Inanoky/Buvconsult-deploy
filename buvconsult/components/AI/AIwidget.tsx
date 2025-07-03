"use client";
import { useState, useRef } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, SendHorizonal, MessageCircle } from "lucide-react";
import aiGeneral from "@/components/AI/aiGeneral";
import { Separator } from "@/components/ui/separator";

export default function AIChatGeneral() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // Controls widget open/close
  const inputRef = useRef();

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    setInput("");
    try {
      const result = await aiGeneral(input);
      const botMsg = { sender: "bot", text: JSON.stringify(result.answer) || "Sorry, I didn't get that." };
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

  // --- Floating Button & Widget ---
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
                      <div className="flex items-center gap-2">
                        {msg.sender === "user" ? <User size={18} /> : <Bot size={18} />}
                        <span>{msg.text}</span>
                      </div>
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
    </>
  );
}
