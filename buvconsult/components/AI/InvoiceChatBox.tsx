"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { askInvoiceGpt } from "@/app/actions"; // see server action below

export function InvoiceChatBox({ siteId }) {
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = React.useState(false);

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setLoading(true);
    try {
      // Send user input to server action
      const answer = await askInvoiceGpt(siteId, input);
      setMessages(msgs => [
        ...msgs,
        { role: "user", content: input },
        { role: "assistant", content: answer }
      ]);
      setInput("");
    } catch (err) {
      setMessages(msgs => [
        ...msgs,
        { role: "assistant", content: "Error: Could not get a response from GPT." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Ask GPT about your Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 min-h-[250px] max-h-[400px] overflow-y-auto border p-2 rounded bg-muted mb-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.role === "user" ? "text-blue-600" : "text-green-700"}>
              <strong>{msg.role === "user" ? "You" : "GPT"}:</strong> {msg.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex gap-2">
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
            placeholder="Ask anything about your invoices…"
          />
          <Button type="submit" disabled={loading || !input.trim()}>
            {loading ? "Thinking…" : "Send"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
