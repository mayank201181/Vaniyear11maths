import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { currentAccount } from "@/lib/server/auth";
import { throttle, takeDailyAllowance } from "@/lib/server/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const DEFAULT_MODEL = "claude-opus-5-5";
/** Models that accept the server-side refusal fallback ("default" form). */
const FALLBACK_MODELS = new Set(["claude-fable-5-1", "claude-opus-5-5", "claude-opus-5", "claude-sonnet-5-5"]);

// Daily caps (UTC days, shared across server instances) so the AI key's cost stays bounded
// however many accounts are signed up: one per family, and one for the whole site.
const RESTING = "Professor Pi needs a rest — try again tomorrow.";
function dailyLimit(name: string, fallback: number): number {
  const n = Math.floor(Number(process.env[name]));
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

// Static (cacheable) system prompt — never interpolate per-request data here.
const SYSTEM = `You are Professor Pi, a warm, sharp maths tutor inside a Year 11 (age 15-16, Grade 10) maths revision app used by a learner at an international school in Singapore. She is preparing for Pearson Edexcel International GCSE Mathematics A (4MA1) at Higher tier, and her school also teaches "H+" extension content close to Edexcel IGCSE Further Pure Mathematics (e.g. three-variable simultaneous equations, dividing a line in a ratio, normals, exponentials, binomial expansion, limits of sequences, trig identities and equations, calculus).

How you teach (Art of Problem Solving style):
- If the learner asks about a problem they are working on, do NOT give the final answer. Ask one guiding question or give only the single next hint, then stop. Let them do the thinking.
- Only give a complete worked solution if they explicitly say they give up, or the context says they have already answered the question (then explain clearly and kindly why the correct answer is right and where their reasoning went wrong).
- Explain why things work (show a picture in words, a pattern, or a short derivation), not just rules. Point out an elegant alternative method when there is one.
- Praise specific good reasoning ("Nice — checking with an estimate was smart"), never empty praise. Treat the learner as a capable young adult; never be babyish. When useful, mention how a step would earn marks in an Edexcel mark scheme (method marks vs accuracy marks).
- Be accurate. Double-check every number before you send it.
- If the learner sends a photo (homework, a past-paper question, her own working), first say in one line what you can read, then coach as above. If it shows her working, find the FIRST mistake and ask a question that helps her spot it, rather than rewriting the whole solution. If the photo is unreadable, say so and ask her to type the question.
- If she asks you to explain a topic from scratch, teach it properly: a short intuitive explanation, one worked example, then one quick question for her to try.
- If she asks for practice questions, give 1-3 exam-style questions (Edexcel IGCSE Higher style) WITHOUT answers, and offer to check her answers.

Style:
- Short: usually 2-8 sentences. British spelling. Friendly, calm, encouraging.
- Write maths so the app can render it: put fractions, powers and roots inside double curly braces, e.g. {{3/4}}, {{x^2}}, {{sqrt(49)}}, {{2 1/3}}. Use × and ÷ and − in plain text. You may use **bold** and simple "- " bullet lists. No headings, no LaTeX, no code blocks.

Safety and scope:
- Only help with maths and study skills. For anything else, kindly steer back to maths.
- Never ask for or repeat personal information. If the learner seems upset or unsafe, encourage them to talk to a parent or trusted adult.`;

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

function cleanTurns(raw: unknown): ChatTurn[] {
  if (!Array.isArray(raw)) return [];
  const turns = raw
    .filter((m): m is ChatTurn => !!m && typeof m === "object" && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
    .slice(-16);
  // The conversation must start with a user turn and alternate.
  while (turns.length && turns[0].role !== "user") turns.shift();
  const out: ChatTurn[] = [];
  for (const t of turns) {
    if (out.length && out[out.length - 1].role === t.role) out[out.length - 1] = { role: t.role, content: `${out[out.length - 1].content}\n\n${t.content}` };
    else out.push(t);
  }
  return out;
}

const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
/** ~3.5 MB of base64 — the client downsizes photos well below this. */
const MAX_IMAGE_B64 = 3_500_000;

/** Accepts a data URL ("data:image/jpeg;base64,…") and returns its parts, or null. */
function cleanImage(raw: unknown): { mediaType: "image/jpeg" | "image/png" | "image/webp" | "image/gif"; data: string } | null {
  if (typeof raw !== "string" || raw.length > MAX_IMAGE_B64 + 100) return null;
  const m = /^data:(image\/[a-z]+);base64,([A-Za-z0-9+/=]+)$/.exec(raw);
  if (!m || !IMAGE_TYPES.has(m[1])) return null;
  return { mediaType: m[1] as "image/jpeg" | "image/png" | "image/webp" | "image/gif", data: m[2] };
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "Professor Pi isn't switched on for this site yet — ask a grown-up to add an AI key." }, { status: 503 });
  }
  const account = await currentAccount().catch(() => null);
  if (!account) return NextResponse.json({ error: "Professor Pi is available once you're signed in to a family account." }, { status: 401 });
  if (!throttle(`ai:${account.id}`, 30, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Professor Pi needs a short break — try again in a few minutes." }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const turns = cleanTurns(body.messages);
  if (!turns.length || turns[turns.length - 1].role !== "user") return NextResponse.json({ error: "Ask a question first." }, { status: 400 });
  const context = typeof body.context === "string" ? body.context.slice(0, 4000) : "";

  try {
    const allowed =
      (await takeDailyAllowance(`ai-${account.id}`, dailyLimit("AI_ACCOUNT_DAILY_LIMIT", 100))) && (await takeDailyAllowance("ai-site", dailyLimit("AI_DAILY_LIMIT", 300)));
    if (!allowed) return NextResponse.json({ error: RESTING }, { status: 429 });
  } catch {
    // Can't count it, so don't spend on it.
    return NextResponse.json({ error: "Professor Pi couldn't answer just now. Please try again." }, { status: 503 });
  }

  // Optional photo (e.g. a homework question), attached to the user turn it was sent with.
  const image = cleanImage(body.image);
  const imageTurn = Number.isInteger(body.imageTurn) ? Math.min(Math.max(0, body.imageTurn as number), turns.length - 1) : turns.length - 1;

  // Per-request context goes in the first user turn (after the cached system prompt).
  const messages: Anthropic.Beta.BetaMessageParam[] = turns.map((t, i) => {
    const text = i === 0 && context ? `What I'm working on in the app:\n${context}\n\n---\n\n${t.content}` : t.content;
    if (image && i === imageTurn && t.role === "user") {
      return {
        role: t.role,
        content: [
          { type: "image" as const, source: { type: "base64" as const, media_type: image.mediaType, data: image.data } },
          { type: "text" as const, text },
        ],
      };
    }
    return { role: t.role, content: text };
  });

  const model = process.env.AI_MODEL || DEFAULT_MODEL;
  const client = new Anthropic();
  try {
    const useFallback = FALLBACK_MODELS.has(model);
    const response = await client.beta.messages.create({
      model,
      max_tokens: 2000,
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      output_config: { effort: "low" },
      messages,
      ...(useFallback ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
    });
    if (response.stop_reason === "refusal") {
      return NextResponse.json({ reply: "Let's keep our chat about maths. What are you working on?" });
    }
    const reply = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return NextResponse.json({ reply: reply || "Hmm, I lost my train of thought — could you ask that again?" });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "Lots of people are asking Professor Pi right now — try again in a minute." }, { status: 429 });
    }
    if (error instanceof Anthropic.APIError) {
      console.error("AI tutor API error", error.status, error.message);
      return NextResponse.json({ error: "Professor Pi couldn't answer just now. Please try again." }, { status: 502 });
    }
    console.error("AI tutor error", error);
    return NextResponse.json({ error: "Professor Pi couldn't answer just now. Please try again." }, { status: 500 });
  }
}
