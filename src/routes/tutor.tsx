import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { z } from "zod";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { SparklesIcon, SendIcon, LoaderIcon } from "@/components/icons";
import { toast } from "sonner";

const search = z.object({ topic: z.string().optional() });

export const Route = createFileRoute("/tutor")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "AI Tutor — MAANG Learn X" },
      { name: "description", content: "Ask an AI MAANG interview coach anything about DSA, System Design, ML or core CS." },
    ],
  }),
  component: TutorPage,
});

type Msg = { role: "user" | "assistant"; content: string };

function TutorPage() {
  const { topic } = Route.useSearch();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || streaming) return;
    const userMsg: Msg = { role: "user", content: text };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setStreaming(true);

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-tutor`;
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg], topic }),
      });

      if (!resp.ok) {
        if (resp.status === 429) toast.error("Rate limit hit. Please wait a moment.");
        else if (resp.status === 402) toast.error("AI credits exhausted. Add credits in Settings.");
        else toast.error("AI request failed");
        setStreaming(false);
        return;
      }
      if (!resp.body) throw new Error("No body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistantSoFar = "";
      let added = false;

      const upsert = (chunk: string) => {
        assistantSoFar += chunk;
        setMessages((prev) => {
          if (!added) {
            added = true;
            return [...prev, { role: "assistant", content: assistantSoFar }];
          }
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        });
      };

      let done = false;
      while (!done) {
        const { value, done: rDone } = await reader.read();
        if (rDone) break;
        buffer += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") { done = true; break; }
          try {
            const p = JSON.parse(json);
            const c = p.choices?.[0]?.delta?.content;
            if (c) upsert(c);
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Connection error");
    } finally {
      setStreaming(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] max-w-4xl mx-auto w-full">
      <div className="px-6 pt-6 pb-3 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <SparklesIcon className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">AI Tutor</h1>
            <p className="text-xs text-muted-foreground">
              {topic ? `Focused on: ${topic}` : "MAANG interview coach — DSA, System Design, ML, OS, DBMS, CN, Aptitude…"}
            </p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground mt-12">
            <SparklesIcon className="h-8 w-8 mx-auto mb-3 text-primary" />
            <p className="text-sm">Ask anything — explain a concept, walk through a problem, mock-interview me…</p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 max-w-xl mx-auto">
              {[
                "Explain sliding window pattern with code",
                "Design a URL shortener",
                "What is RAG and how do I build one?",
                "Difference between processes and threads",
              ].map((s) => (
                <button
                  key={s}
                  onClick={() => setInput(s)}
                  className="text-left text-sm rounded-lg border border-border bg-card/60 backdrop-blur px-3 py-2 hover:border-primary/40 hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <Card className={`p-4 max-w-[85%] ${m.role === "user" ? "bg-gradient-primary text-primary-foreground border-0" : "bg-card/70 backdrop-blur"}`}>
              {m.role === "assistant" ? (
                <div className="prose prose-sm prose-invert max-w-none prose-pre:bg-background/60 prose-pre:border prose-pre:border-border prose-code:text-primary">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content || "…"}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-sm whitespace-pre-wrap">{m.content}</p>
              )}
            </Card>
          </div>
        ))}
        {streaming && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <Card className="p-4 bg-card/70 backdrop-blur">
              <LoaderIcon className="h-4 w-4 animate-spin text-primary" />
            </Card>
          </div>
        )}
      </div>

      <div className="border-t border-border p-4">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder="Ask anything… (Shift+Enter for new line)"
            className="min-h-[48px] resize-none bg-card/60 backdrop-blur"
            disabled={streaming}
          />
          <Button
            onClick={send}
            disabled={streaming || !input.trim()}
            size="lg"
            className="bg-gradient-primary shadow-glow border-0 px-4"
          >
            {streaming ? <LoaderIcon className="h-4 w-4 animate-spin" /> : <SendIcon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
