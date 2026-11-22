import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt, createLocalReply, type ChatLanguage, type ChatMessage } from "@/lib/chatbot";

export const runtime = "nodejs";

const WINDOW_MS = 60_000;
const REQUEST_LIMIT = 12;
const requestLog = new Map<string, number[]>();

function isLanguage(value: unknown): value is ChatLanguage {
  return value === "en" || value === "ms" || value === "zh";
}

function isMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (item.role === "user" || item.role === "assistant")
    && typeof item.content === "string"
    && item.content.trim().length > 0
    && item.content.length <= 1_200;
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  requestLog.set(key, recent);
  return recent.length > REQUEST_LIMIT;
}

async function requestConfiguredProvider(messages: ChatMessage[], language: ChatLanguage) {
  const endpoint = process.env.AI_CHAT_API_URL;
  const apiKey = process.env.AI_CHAT_API_KEY;
  const model = process.env.AI_CHAT_MODEL;
  if (!endpoint || !apiKey || !model) return null;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: buildSystemPrompt(language) }, ...messages],
        temperature: 0.35,
        max_tokens: 700,
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`AI provider returned ${response.status}`);
    }

    const data = await response.json() as {
      choices?: { message?: { content?: string } }[];
      output_text?: string;
    };
    const content = data.choices?.[0]?.message?.content ?? data.output_text;
    if (!content?.trim()) throw new Error("AI provider returned an empty response");
    return content.trim();
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: NextRequest) {
  const client = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(client)) {
    return NextResponse.json({ error: "Too many messages. Please wait a minute and try again." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const input = body as { messages?: unknown; language?: unknown };
  if (!Array.isArray(input.messages) || input.messages.length === 0 || input.messages.length > 10 || !input.messages.every(isMessage) || !isLanguage(input.language)) {
    return NextResponse.json({ error: "Invalid chat request." }, { status: 400 });
  }

  const messages = input.messages as ChatMessage[];
  const lastMessage = messages.at(-1);
  if (!lastMessage || lastMessage.role !== "user") {
    return NextResponse.json({ error: "The final message must come from the visitor." }, { status: 400 });
  }

  try {
    const providerReply = await requestConfiguredProvider(messages, input.language);
    return NextResponse.json({
      message: providerReply ?? createLocalReply(lastMessage.content, input.language),
      source: providerReply ? "ai" : "site-guide",
    });
  } catch (error) {
    console.error("Chat provider request failed", error);
    return NextResponse.json({ error: "The travel guide is temporarily unavailable. Please try again." }, { status: 502 });
  }
}
