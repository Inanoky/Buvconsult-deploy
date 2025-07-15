"use client";
import { useState, useRef, useMemo } from "react";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, SendHorizonal } from "lucide-react";
import aiGeneral from "@/components/AI/aiGeneral";
import { Separator } from "@/components/ui/separator";
import * as XLSX from "xlsx";

// -- Helper to get unique values for column filtering --
function getUniqueValues(data, key) {
  return Array.from(new Set(data.map(row => row[key] ?? "")));
}

// -- Excel export using SheetJS --
function exportToExcel(headers, rows) {
  const worksheetData = [
    headers,
    ...rows.map(row => headers.map(h => row[h] ?? ""))
  ];
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
  XLSX.writeFile(workbook, "table_data.xlsx");
}

// -- Table modal component --
function TableModal({ data, onClose }) {
  if (!Array.isArray(data) || data.length === 0) return null;
  const hideFields = ["id", "accepted", "itemDescription"];
  const headers = Array.from(
    new Set(
      data.flatMap(row => Object.keys(row))
    )
  ).filter(h => !hideFields.includes(h));
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});

  // Filtering and searching
  const filteredData = useMemo(() => {
    return data.filter(row =>
      headers.every(
        (h) =>
          (!filters[h] || filters[h] === "" || row[h] === filters[h]) &&
          (search === "" ||
            Object.values(row)
              .join(" ")
              .toLowerCase()
              .includes(search.toLowerCase()))
      )
    );
  }, [data, filters, search, headers]);

  // Find all "sum" columns (case-insensitive)
  const sumHeaders = headers.filter(h => h.toLowerCase() === "sum");
  const sumTotals = {};
  for (const sumKey of sumHeaders) {
    sumTotals[sumKey] = filteredData.reduce(
      (acc, row) => acc + (parseFloat(row[sumKey]) || 0),
      0
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-[99] flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-8xl w-full mx-4 relative border border-gray-200 dark:border-gray-700">
        <button
          className="absolute right-4 top-4 text-3xl text-gray-700 dark:text-gray-200 hover:text-red-500 font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h3 className="mb-4 text-2xl font-bold dark:text-gray-100">RESULTS</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <Button
            onClick={() => exportToExcel(headers, filteredData)}
            variant="outline"
          >
            Export to Excel
          </Button>
        </div>
        <div className="overflow-x-auto max-h-[80vh]">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-base">
            <thead>
              <tr>
                {headers.map((h) => (
                  <th
                    key={h}
                    className="border-b px-4 py-3 text-left font-semibold bg-gray-50 dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700 max-w-xs break-words whitespace-pre-line"
                    style={{ wordBreak: "break-word" }}
                  >
                    <div className="flex flex-col">
                      <span>{h}</span>
                      <select
                        className="mt-1 text-xs px-1 py-0.5 border rounded bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                        value={filters[h] || ""}
                        onChange={(e) =>
                          setFilters((f) => ({ ...f, [h]: e.target.value }))
                        }
                      >
                        <option value="">All</option>
                        {getUniqueValues(data, h).map((v) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, i) => (
                <tr key={i}>
                  {headers.map((h) => (
                    <td
                      key={h}
                      className="border-b px-4 py-2 border-gray-300 dark:border-gray-700 dark:text-gray-100 max-w-xs break-words whitespace-pre-line"
                      style={{ wordBreak: "break-word" }}
                    >
                      {row[h]}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Subtotal row */}
              <tr className="bg-gray-100 dark:bg-gray-800 font-bold">
                {headers.map((h) =>
                  sumHeaders.includes(h) ? (
                    <td
                      key={h}
                      className="px-4 py-2 border-t border-b border-gray-400 dark:border-gray-600 text-right dark:text-gray-100 max-w-xs break-words whitespace-pre-line"
                      style={{ wordBreak: "break-word" }}
                    >
                      Subtotal:{" "}
                      {sumTotals[h].toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  ) : (
                    <td
                      key={h}
                      className="px-4 py-2 border-t border-b border-gray-400 dark:border-gray-600 max-w-xs break-words whitespace-pre-line"
                      style={{ wordBreak: "break-word" }}
                    ></td>
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


export default function AIChatGeneral({ siteId }) {
  const [messages, setMessages] = useState([
    { sender: "bot", aiComment: "Hi! 👋 How can I help you today?", answer: "" },
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
      const result = await aiGeneral(input, siteId);
      // Always store both aiComment and answer

      console.log(`This is in the frontend ${JSON.stringify(result.acceptedResults)}`)

      const botMsg = {
        sender: "bot",
        aiComment: result.aiComment ?? "",
        answer: result.acceptedResults?? "",

      };

      setMessages((msgs) => [...msgs, botMsg]);
    } catch (e) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", aiComment: "Something went wrong.", answer: "" },
      ]);
    }
    setLoading(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) handleSend();
  };

  // Always render aiComment : answer (as link if answer is table)
  function renderMessage(msg) {
    if (msg.sender === "bot" && msg.aiComment !== undefined) {
      // Detect table: answer is array of objects
      let isTable = false;
      let tableData = null;
      if (msg.answer) {
        if (Array.isArray(msg.answer) && typeof msg.answer[0] === "object") {
          isTable = true;
          tableData = msg.answer;
        } else {
          // Support stringified array as well
          try {
            const parsed = JSON.parse(msg.answer);
            if (Array.isArray(parsed) && typeof parsed[0] === "object") {
              isTable = true;
              tableData = parsed;
            }
          } catch {}
        }
      }
      return (
        <span>
          <Bot size={18} className="inline mr-2" />
          <span className="font-medium">{msg.aiComment}</span>
          <span>: </span>
          {isTable ? (
            <button
              className="text-blue-700 dark:text-blue-400 underline hover:text-blue-900 dark:hover:text-blue-300 ml-1"
              onClick={() => setExpandedData(tableData)}
            >
              View table
            </button>
          ) : (
            <span className="ml-1">{String(msg.answer)}</span>
          )}
        </span>
      );
    }

    // User message or fallback
    return (
      <span>
        {msg.sender === "user" ? (
          <User size={18} className="inline mr-2" />
        ) : (
          <Bot size={18} className="inline mr-2" />
        )}
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
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition"
          aria-label="Open AI Assistant Chat"
        >
          <Bot size={28} />
        </button>
      )}

      {/* Chat Widget */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] max-w-[96vw] rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col">
          <Card className="w-full rounded-2xl shadow-none border-0 bg-transparent">
            <CardHeader className="flex items-center justify-between py-3 px-4 bg-blue-600 text-white dark:bg-blue-800 dark:text-white rounded-t-2xl">
              <span className="text-lg font-semibold">AI Assistant</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-gray-200 dark:hover:text-gray-300 transition"
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
                    className={`flex ${
                      msg.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-4 py-2 max-w-[70%] ${
                        msg.sender === "user"
                          ? "bg-blue-500 text-white dark:bg-blue-600 dark:text-white"
                          : "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {renderMessage(msg)}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-2xl px-4 py-2 max-w-[70%] animate-pulse">
                      <Bot size={18} className="inline mr-2" /> ...
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <Separator />
            <CardFooter className="flex gap-2 bg-white dark:bg-gray-900">
              <Input
                ref={inputRef}
                placeholder="Type your message…"
                value={input}
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-white dark:bg-gray-800 dark:text-gray-100"
              />
              <Button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                size="icon"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
              >
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
