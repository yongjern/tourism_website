"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Bot, ExternalLink, Languages, MessageCircle, RotateCcw, Send, X } from "lucide-react";
import type { ChatLanguage, ChatMessage } from "@/lib/chatbot";

const ui = {
  en: {
    label: "Ask Warisan",
    title: "Pahang travel guide",
    status: "AI guide · session only",
    welcome: "Tell me what you enjoy or how many days you have. I can suggest heritage places and shape a practical route.",
    placeholder: "Ask about Pahang…",
    send: "Send message",
    close: "Close travel guide",
    reset: "Reset conversation",
    language: "Change language",
    notice: "AI answers may be inaccurate. Confirm hours, prices and access before travel.",
    contact: "Contact human support",
    typing: "Planning your answer…",
    error: "I could not answer just now. Please try again.",
    prompts: ["Recommend heritage places", "Plan a 2-day trip", "How do I get around?"],
  },
  ms: {
    label: "Tanya Warisan",
    title: "Panduan perjalanan Pahang",
    status: "Panduan AI · sesi ini sahaja",
    welcome: "Beritahu minat anda atau tempoh lawatan. Saya boleh mencadangkan tempat warisan dan merancang laluan yang praktikal.",
    placeholder: "Tanya tentang Pahang…",
    send: "Hantar mesej",
    close: "Tutup panduan perjalanan",
    reset: "Tetapkan semula perbualan",
    language: "Tukar bahasa",
    notice: "Jawapan AI mungkin kurang tepat. Sahkan waktu, harga dan akses sebelum perjalanan.",
    contact: "Hubungi bantuan manusia",
    typing: "Sedang merancang jawapan…",
    error: "Saya tidak dapat menjawab sekarang. Sila cuba lagi.",
    prompts: ["Cadangkan tempat warisan", "Rancang perjalanan 2 hari", "Bagaimana cara bergerak?"],
  },
  zh: {
    label: "询问导游",
    title: "彭亨旅行指南",
    status: "AI 指南 · 仅限本次会话",
    welcome: "请告诉我您的兴趣或旅行天数。我可以推荐文化遗产景点，并规划实用路线。",
    placeholder: "询问彭亨旅游信息…",
    send: "发送消息",
    close: "关闭旅行指南",
    reset: "重置对话",
    language: "切换语言",
    notice: "AI 回答可能不准确。出发前请确认开放时间、价格和参观限制。",
    contact: "联系人工客服",
    typing: "正在规划回答…",
    error: "暂时无法回答，请稍后再试。",
    prompts: ["推荐文化遗产景点", "规划两天行程", "当地交通方式"],
  },
};

const languageOrder: ChatLanguage[] = ["en", "ms", "zh"];

export default function TravelChatbot() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<ChatLanguage>("en");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const t = ui[language];

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const cycleLanguage = () => {
    const next = languageOrder[(languageOrder.indexOf(language) + 1) % languageOrder.length];
    setLanguage(next);
    setMessages([]);
  };

  const sendMessage = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content }].slice(-9);
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, language }),
      });
      const data = await response.json() as { message?: string; error?: string };
      if (!response.ok || !data.message) throw new Error(data.error ?? "Chat request failed");
      setMessages((current) => [...current, { role: "assistant", content: data.message! }]);
    } catch (error) {
      console.error("Travel chat failed", error);
      setMessages((current) => [...current, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return <div className={open ? "travel-chat open" : "travel-chat"}>
    {open && <section className="chat-panel" role="dialog" aria-modal="false" aria-labelledby="chat-title">
      <header className="chat-header">
        <div className="chat-guide-mark" aria-hidden="true"><Bot size={22}/></div>
        <div><h2 id="chat-title">{t.title}</h2><p><span/>{t.status}</p></div>
        <div className="chat-header-actions">
          <button type="button" onClick={cycleLanguage} aria-label={t.language} title={t.language}><Languages size={18}/><b>{language.toUpperCase()}</b></button>
          <button type="button" onClick={() => setMessages([])} aria-label={t.reset} title={t.reset}><RotateCcw size={18}/></button>
          <button type="button" onClick={() => setOpen(false)} aria-label={t.close}><X size={20}/></button>
        </div>
      </header>

      <div className="chat-messages" ref={listRef} aria-live="polite">
        <div className="chat-message assistant"><div className="chat-avatar"><Bot size={16}/></div><p>{t.welcome}</p></div>
        {!messages.length && <div className="chat-prompts">{t.prompts.map((prompt) => <button type="button" key={prompt} onClick={() => void sendMessage(prompt)}>{prompt}<span>↗</span></button>)}</div>}
        {messages.map((message, index) => <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
          {message.role === "assistant" && <div className="chat-avatar"><Bot size={16}/></div>}
          <p>{message.content}</p>
        </div>)}
        {loading && <div className="chat-message assistant chat-loading"><div className="chat-avatar"><Bot size={16}/></div><p><span/><span/><span/><i>{t.typing}</i></p></div>}
      </div>

      <div className="chat-composer">
        <form onSubmit={submit}>
          <textarea ref={inputRef} value={input} onChange={(event) => setInput(event.target.value.slice(0, 800))} onKeyDown={handleKeyDown} placeholder={t.placeholder} rows={1} aria-label={t.placeholder}/>
          <button type="submit" disabled={!input.trim() || loading} aria-label={t.send}><Send size={18}/></button>
        </form>
        <p>{t.notice} <a href="mailto:support@warisanpahang.example">{t.contact}<ExternalLink size={12}/></a></p>
      </div>
    </section>}

    <button className="chat-launcher" type="button" onClick={() => setOpen((current) => !current)} aria-label={open ? t.close : t.label} aria-expanded={open}>
      {open ? <X size={24}/> : <MessageCircle size={25}/>}<span>{t.label}</span>
    </button>
  </div>;
}
