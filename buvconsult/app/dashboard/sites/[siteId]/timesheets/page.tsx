"use client";
import { useState, useRef } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, SendHorizonal } from "lucide-react";

// Import your server action
import aiGeneral from "@/components/AI/aiGeneral";
import {Separator} from "@/components/ui/separator";

export default function AIChatGeneral() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    setInput("");

    try {
      // Call your server action, pass the current question
      const result = await aiGeneral(input);
      console.log("AI returned:", result)
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

  // Enter key shortcut
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) handleSend();
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-12 shadow-2xl">
      <CardHeader>
        <h2 className="text-xl font-semibold text-center">AI General Chat</h2>
      </CardHeader>
      <Separator />
      <ScrollArea className="h-96 p-4">
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
                  {msg.sender === "user" ? (
                    <User size={18} />
                  ) : (
                    <Bot size={18} />
                  )}
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
  );
}
