"use client";
// Full-page "Ask Professor Pi": a free-standing maths tutor chat with optional
// topic focus and a photo of a question or of her working. Hints, not answers.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Rich } from "./Rich";

interface Turn {
  role: "user" | "assistant";
  content: string;
  /** The photo sent with this turn (data URL), shown as a thumbnail. */
  image?: string;
}

interface TopicOption {
  id: string;
  title: string;
}

const MAX_TURNS = 16;
const STARTERS: { label: string; prompt: string }[] = [
  { label: "📸 Help with a question", prompt: "Here's a question I'm stuck on. Can you help me get started without giving me the answer?" },
  { label: "✅ Check my working", prompt: "Can you check my working and tell me if there's a mistake? Help me find it myself." },
  { label: "📖 Explain a topic", prompt: "Can you explain this topic from scratch with one worked example, then give me one to try?" },
  { label: "📝 Give me exam questions", prompt: "Give me 3 Edexcel IGCSE Higher style questions on this, without answers. I'll send you my answers to check." },
  { label: "🧠 Exam technique", prompt: "What are the most common ways students lose marks on this in Edexcel IGCSE exams, and how do I avoid them?" },
];

/** Downsizes a photo to ≤ 1600 px on its long side as a JPEG data URL (small enough to send). */
async function shrinkImage(file: File): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("Couldn't read that image."));
      el.src = url;
    });
    const scale = Math.min(1, 1600 / Math.max(img.naturalWidth, img.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Couldn't read that image.");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.82);
  } finally {
    URL.revokeObjectURL(url);
  }
}

function storageKey(profileId: string | undefined) {
  return `y11m:tutor:${profileId ?? "anon"}`;
}

export function TutorChat({ topics }: { topics: TopicOption[] }) {
  const { mode, status, activeProfile } = useStore();
  const [turns, setTurns] = useState<Turn[]>([]);
  const [topicId, setTopicId] = useState("");
  const [draft, setDraft] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const key = storageKey(activeProfile?.id);

  // Restore the last conversation (text only — photos are not kept).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return;
      const saved = JSON.parse(raw) as { turns?: Turn[]; topicId?: string };
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time restore from storage
      if (Array.isArray(saved.turns)) setTurns(saved.turns.filter((t) => t && (t.role === "user" || t.role === "assistant") && typeof t.content === "string").map((t) => ({ role: t.role, content: t.content })));
      if (typeof saved.topicId === "string") setTopicId(saved.topicId);
    } catch {
      /* storage unavailable */
    }
  }, [key]);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify({ turns: turns.slice(-MAX_TURNS).map((t) => ({ role: t.role, content: t.content })), topicId }));
    } catch {
      /* storage unavailable */
    }
  }, [key, turns, topicId]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [turns, busy]);

  async function onPick(file: File | undefined) {
    if (!file) return;
    setError(null);
    try {
      setPhoto(await shrinkImage(file));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't read that image.");
    }
  }

  async function send(text: string) {
    const q = text.trim() || (photo ? "Here's a photo of the question." : "");
    if (!q || busy) return;
    const next: Turn[] = [...turns, { role: "user", content: q, ...(photo ? { image: photo } : {}) }];
    setTurns(next);
    setDraft("");
    setPhoto(null);
    if (fileRef.current) fileRef.current.value = "";
    setBusy(true);
    setError(null);
    // Send the latest window; re-attach the most recent photo if it is still inside it.
    const windowed = next.slice(-MAX_TURNS);
    let imageTurn = -1;
    for (let i = windowed.length - 1; i >= 0; i--) {
      if (windowed[i].image) {
        imageTurn = i;
        break;
      }
    }
    const topic = topics.find((t) => t.id === topicId);
    const context = topic ? `Free tutoring chat. She has chosen the topic: ${topic.title}.` : "Free tutoring chat (no specific topic chosen).";
    try {
      const r = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: windowed.map((t) => ({ role: t.role, content: t.content })),
          context,
          ...(imageTurn >= 0 ? { image: windowed[imageTurn].image, imageTurn } : {}),
        }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || typeof j.reply !== "string") setError(typeof j.error === "string" ? j.error : "Professor Pi couldn't answer just now.");
      else setTurns([...next, { role: "assistant", content: j.reply }]);
    } catch {
      setError("Couldn't reach Professor Pi. Check your internet connection.");
    } finally {
      setBusy(false);
    }
  }

  function newChat() {
    setTurns([]);
    setPhoto(null);
    setError(null);
  }

  if (status === "loading") return <div className="card p-6 text-ink-2">Loading…</div>;

  if (mode === "guest") {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-extrabold">Professor Pi needs a family account</h2>
        <p className="mt-2 text-ink-2">So a grown-up can keep an eye on usage, the AI tutor works when you&apos;re signed in to a family account. Use the menu to sign in or create one.</p>
        <Link href="/" className="btn btn-primary mt-4">
          Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="card flex flex-col p-3 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <label className="text-sm font-bold text-ink-2" htmlFor="tutor-topic">
          Topic
        </label>
        <select id="tutor-topic" className="input w-auto max-w-full text-sm" value={topicId} onChange={(e) => setTopicId(e.target.value)}>
          <option value="">Anything / not sure</option>
          {topics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>
        {turns.length ? (
          <button type="button" className="btn btn-ghost btn-sm ml-auto" onClick={newChat}>
            ✨ New chat
          </button>
        ) : null}
      </div>

      <div className="mt-3 min-h-[16rem] space-y-2 overflow-y-auto sm:max-h-[60vh]" aria-live="polite">
        {turns.length === 0 ? (
          <div className="rounded-2xl bg-surface-2 p-4 text-sm text-ink-2">
            <p className="font-bold text-ink">Ask me anything about Year 11 maths.</p>
            <p className="mt-1">Type a question, or snap a photo of a homework or past-paper question (or your working). I&apos;ll give you hints and explanations so you can crack it yourself. Say &ldquo;I give up&rdquo; if you want the full solution.</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {STARTERS.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  className="chip hover:bg-brand-soft"
                  onClick={() => {
                    if (s.label.startsWith("📸")) fileRef.current?.click();
                    setDraft(s.prompt);
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        {turns.map((t, i) => (
          <div key={i} className={t.role === "user" ? "ml-8 rounded-xl bg-brand-soft px-3 py-2 text-sm" : "mr-4 rounded-xl bg-surface-2 px-3 py-2 text-sm"}>
            {t.image ? (
              // eslint-disable-next-line @next/next/no-img-element -- local data URL preview
              <img src={t.image} alt="Photo you sent" className="mb-2 max-h-48 rounded-lg border border-line" />
            ) : null}
            {t.role === "assistant" ? <Rich text={t.content} /> : <span className="whitespace-pre-wrap">{t.content}</span>}
          </div>
        ))}
        {busy ? <div className="mr-4 rounded-xl bg-surface-2 px-3 py-2 text-sm text-ink-2">Professor Pi is thinking…</div> : null}
        {error ? <div className="rounded-xl bg-bad-soft px-3 py-2 text-sm">{error}</div> : null}
        <div ref={endRef} />
      </div>

      {photo ? (
        <div className="mt-3 flex items-center gap-3 rounded-xl border border-line p-2">
          {/* eslint-disable-next-line @next/next/no-img-element -- local data URL preview */}
          <img src={photo} alt="Photo to send" className="h-16 rounded-md" />
          <span className="text-sm text-ink-2">Photo ready — add a note and send.</span>
          <button type="button" className="btn btn-ghost btn-sm ml-auto" onClick={() => setPhoto(null)} aria-label="Remove photo">
            ✕
          </button>
        </div>
      ) : null}

      <form
        className="mt-3 flex items-end gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          void send(draft);
        }}
      >
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => void onPick(e.target.files?.[0])} />
        <button type="button" className="btn btn-secondary btn-sm shrink-0" onClick={() => fileRef.current?.click()} aria-label="Add a photo">
          📷
        </button>
        <textarea
          className="input min-h-[2.75rem] flex-1 resize-y text-sm"
          rows={2}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send(draft);
            }
          }}
          placeholder="Ask a question… (Shift+Enter for a new line)"
          maxLength={2000}
          aria-label="Your question"
        />
        <button type="submit" className="btn btn-primary btn-sm shrink-0" disabled={busy || (!draft.trim() && !photo)}>
          Send
        </button>
      </form>
      <p className="mt-2 text-xs text-ink-2">Tip: write maths like x^2, sqrt(3), 3/4. Professor Pi can make mistakes — check anything surprising.</p>
    </div>
  );
}
