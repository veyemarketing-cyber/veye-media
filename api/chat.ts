import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

/* =========================
   ESM-safe __dirname
========================= */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* =========================
   Canonical Pages (redirect for full detail)
========================= */
const CANONICAL_PAGES = {
  frameworks: "/velocity-sync-engine",
  startConversation: "/start-a-conversation",
};

/* =========================
   Knowledge Types
========================= */
type Knowledge = {
  meta?: { version?: string; last_updated?: string };
  brand?: {
    name?: string;
    positioning_one_liner?: string;
    core_message?: string;
  };
  assistant_policy?: {
    grounding_rule?: string;
    fallback_message?: string;
  };
  systems_we_build?: Array<{
    name: string;
    outcomes?: string[];
    what_it_includes?: string[];
    what_it_is_not?: string[];
  }>;
  core_capabilities?: Record<string, string[]>;
  approved_language?: {
    must_use_phrases?: string[];
    preferred_explanations?: Array<{ topic: string; answer: string }>;
  };
  faq?: Array<{ q: string; a: string }>;
  handoff_rules?: {
    human_handoff_triggers?: Array<{
      name: string;
      match_any: string[];
      handoff_reason: string;
    }>;
    handoff_response_template?: string;
  };
};

/* =========================
   Load Knowledge (Lazy)
========================= */
let KNOWLEDGE_CACHE: Knowledge | null = null;

function loadKnowledge(): Knowledge {
  if (KNOWLEDGE_CACHE) return KNOWLEDGE_CACHE;

  const knowledgePath = path.join(__dirname, "knowledge.json");
  const raw = JSON.parse(fs.readFileSync(knowledgePath, "utf8")) as Knowledge;

  if (!raw?.brand?.name) throw new Error("Knowledge missing: brand.name");
  if (!raw?.assistant_policy?.fallback_message)
    throw new Error("Knowledge missing: assistant_policy.fallback_message");
  if (!Array.isArray(raw?.systems_we_build) || raw.systems_we_build.length === 0)
    throw new Error("Knowledge missing: systems_we_build");

  KNOWLEDGE_CACHE = raw;
  return raw;
}

/* =========================
   Helpers
========================= */
function norm(s: string) {
  return (s || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function includesAny(text: string, list: string[]) {
  const t = norm(text);
  return (list || []).some((x) => t.includes(norm(x)));
}

// Prevent hangs
async function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return await Promise.race([
    p,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Gemini timeout after ${ms}ms`)), ms)
    ),
  ]);
}

function detectHandoff(k: Knowledge, message: string) {
  const triggers = k.handoff_rules?.human_handoff_triggers || [];
  for (const t of triggers) {
    if (includesAny(message, t.match_any)) {
      return {
        isHandoff: true,
        reason: t.handoff_reason || "User intent indicates human handoff.",
        template: k.handoff_rules?.handoff_response_template,
      };
    }
  }
  return { isHandoff: false as const };
}

// Append a short “learn more” link (keeps answers brief)
function addLearnMore(answer: string, href: string): string {
  return `${answer}\n\nFull details: ${href}`;
}

/* =========================
   RESPONSE GOVERNANCE
   - Hard sentence cap (<= 5)
   - Mandatory redirects for framework/system and contact/pricing intents
========================= */
type RedirectRule = {
  keywords: string[];
  url: string;
  label?: string;
};

const REDIRECT_RULES: RedirectRule[] = [
  {
    keywords: [
      "velocity",
      "velocity sync",
      "velocity sync engine",
      "framework",
      "frameworks",
      "system",
      "systems",
      "operating framework",
      "operating model",
      "enterprise operating framework",
      "capabilities",
      "what do you build",
      "what systems do you build",
      "what you build",
      "catalog",
      "playbook",
      "phases",
      "phase b",
      "phase c",
      "phase d",
      "phase e",
      "more detail",
      "tell me more",
      "details",
      "full list",
      "all frameworks",
    ],
    url: CANONICAL_PAGES.frameworks,
    label: "Full details",
  },
  {
    keywords: [
      "start a conversation",
      "contact",
      "talk to someone",
      "human",
      "live agent",
      "sales",
      "quote",
      "pricing",
      "price",
      "cost",
      "proposal",
      "retainer",
      "hire you",
      "book a call",
      "schedule",
      "meeting",
    ],
    url: CANONICAL_PAGES.startConversation,
    label: "Start here",
  },
];

function stripExistingLinks(text: string): string {
  return (text || "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1") // markdown links -> label only
    .replace(/https?:\/\/\S+/g, "") // naked URLs
    .replace(/\s+/g, " ")
    .trim();
}

function splitSentences(text: string): string[] {
  const cleaned = (text || "")
    .replace(/\s+/g, " ")
    .replace(/\u00A0/g, " ")
    .trim();
  if (!cleaned) return [];

  const parts = cleaned.split(/(?<=[.!?])\s+/g).filter(Boolean);
  return parts.map((p) => p.trim()).filter(Boolean);
}

function enforceMaxSentences(text: string, maxSentences = 5): string {
  const s = splitSentences(text);
  if (s.length === 0) return "";
  if (s.length <= maxSentences) return s.join(" ").trim();

  const keep = Math.min(3, maxSentences);
  return s.slice(0, keep).join(" ").trim();
}

function findRedirectUrl(message: string, answer: string): { url?: string; label?: string } {
  const haystack = `${norm(message)} ${norm(answer)}`;
  for (const rule of REDIRECT_RULES) {
    for (const k of rule.keywords) {
      if (haystack.includes(norm(k))) {
        return { url: rule.url, label: rule.label };
      }
    }
  }
  return {};
}

function ensureRedirectLine(text: string, url: string, label = "Full details"): string {
  const cleaned = (text || "").trim();
  if (!cleaned) return `${label}: ${url}`;
  if (cleaned.includes(url)) return cleaned;

  const spacer =
    cleaned.endsWith(".") || cleaned.endsWith("!") || cleaned.endsWith("?") ? " " : ". ";
  return `${cleaned}${spacer}${label}: ${url}`.trim();
}

function enforceResponseContract(opts: {
  message: string;
  answer: string;
  maxSentences?: number;
}): string {
  const { message, answer } = opts;
  const maxSentences = opts.maxSentences ?? 5;

  let out = stripExistingLinks(answer);
  out = enforceMaxSentences(out, maxSentences);

  const redirect = findRedirectUrl(message, out);
  if (redirect.url) {
    out = ensureRedirectLine(out, redirect.url, redirect.label ?? "Full details");
  }

  // SAFETY: never return empty (prevents UI default fallback)
  return (out || answer).replace(/\s+/g, " ").trim();
}

/**
 * Short, intentional answer for “What systems do you build?”
 */
function buildSystemsAnswerBrief(k: Knowledge): string {
  const oneLiner =
    k.approved_language?.preferred_explanations?.find(
      (x) => norm(x.topic) === "what systems do you build?"
    )?.answer ||
    "Veye Media builds connected business systems that align strategy, operations, data, and growth—so execution is consistent and outcomes are measurable.";

  const extra =
    "Our core systems include Velocity Sync Engine™, Start a Conversation, and Data Governance & Intelligence—each designed to produce measurable outcomes.";

  return addLearnMore(`${oneLiner}\n\n${extra}`, CANONICAL_PAGES.frameworks);
}

function isCoveredByKnowledge(k: Knowledge, message: string): boolean {
  const always = [
    "what do you build",
    "what systems",
    "what do you do",
    "who are you",
    "how do we start",
    "how to start",
    "start a conversation",
    "contact",
    "live agent",
    "talk to someone",
    "human",
    "pricing",
    "cost",
    "proposal",
    "retainer",
    "hire you",
  ];
  if (includesAny(message, always)) return true;

  const topics: string[] = [];
  (k.systems_we_build || []).forEach((s) => topics.push(s.name));
  (k.faq || []).forEach((f) => topics.push(f.q));
  (k.approved_language?.preferred_explanations || []).forEach((p) => topics.push(p.topic));
  Object.keys(k.core_capabilities || {}).forEach((c) => topics.push(c));

  return includesAny(message, topics);
}

function buildSystemInstruction(k: Knowledge): string {
  const fallback =
    k.assistant_policy?.fallback_message ||
    "I don’t have that information on the site yet. Please use Start a Conversation.";

  return `You are the "${k.brand?.name || "Veye Media"} site assistant".

NON-NEGOTIABLE RULES:
- Answer using ONLY the CANONICAL KNOWLEDGE provided in the prompt.
- Do NOT invent details. Do NOT guess. Do NOT reference the live website.
- Do NOT reveal internal tooling, credentials, APIs, code, or implementation specifics.
- If the knowledge does not support the answer, respond exactly with:
"${fallback}"

STYLE:
- Strategic, systems-first, outcomes-focused.
- DEFAULT to brief summaries (3–5 sentences max).
- Do NOT enumerate full lists unless explicitly asked.
- When a visitor wants more detail, redirect them to the canonical page instead of expanding.
- Offer a short next step when appropriate.`;
}

function buildPrompt(k: Knowledge, message: string): string {
  return `CANONICAL KNOWLEDGE (use ONLY this JSON):
${JSON.stringify(k, null, 2)}

USER QUESTION:
${message}`;
}

/* =========================
   API Handler
========================= */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const message = String(req.body?.message || "").trim();
    if (!message) return res.status(400).json({ error: "Missing message" });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Missing GEMINI_API_KEY" });

    const KNOWLEDGE = loadKnowledge();
    const handoff = detectHandoff(KNOWLEDGE, message);

    const sources = [
      { type: "knowledge", version: KNOWLEDGE.meta?.version, lastUpdated: KNOWLEDGE.meta?.last_updated },
    ];

    // Fast path: “What systems do you build?”
    if (includesAny(message, ["what systems do you build", "what do you build", "your systems"])) {
      const raw = buildSystemsAnswerBrief(KNOWLEDGE);

      // If you want “longer today”, comment the next line and set final = raw
      const final = enforceResponseContract({ message, answer: raw, maxSentences: 5 });

      return res.status(200).json({
        ok: true,
        answer: final,
        reply: final, // <-- IMPORTANT: keeps frontend from falling back to default
        isHandoff: handoff.isHandoff,
        handoffReason: (handoff as any).reason,
        sources,
      });
    }

    // If not covered, return fallback (no Gemini)
    if (!isCoveredByKnowledge(KNOWLEDGE, message)) {
      const raw = addLearnMore(
        KNOWLEDGE.assistant_policy?.fallback_message ||
          "I don’t have that in my system knowledge yet—would you like me to add it?",
        CANONICAL_PAGES.startConversation
      );

      const final = enforceResponseContract({ message, answer: raw, maxSentences: 5 });

      return res.status(200).json({
        ok: true,
        answer: final,
        reply: final, // <-- IMPORTANT
        isHandoff: handoff.isHandoff,
        handoffReason: (handoff as any).reason,
        sources,
      });
    }

    // Gemini
    const ai = new GoogleGenAI({ apiKey });

    const response = await withTimeout(
      ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: "user", parts: [{ text: buildPrompt(KNOWLEDGE, message) }] }],
        config: {
          systemInstruction: buildSystemInstruction(KNOWLEDGE),
          temperature: 0.25,
        },
      }),
      12000
    );

    const fallback =
      KNOWLEDGE.assistant_policy?.fallback_message ||
      "I don’t have that in my system knowledge yet—would you like me to add it?";

    const raw = response.text || fallback;

    const withHandoff =
      handoff.isHandoff && (handoff as any).template
        ? `${raw}\n\n${(handoff as any).template}`
        : raw;

    // If you want “longer today”, set final = withHandoff
    const final = enforceResponseContract({ message, answer: withHandoff, maxSentences: 5 });

    return res.status(200).json({
      ok: true,
      answer: final,
      reply: final, // <-- IMPORTANT
      isHandoff: handoff.isHandoff,
      handoffReason: (handoff as any).reason,
      sources,
    });
  } catch (err: any) {
    console.error("api/chat error:", err);
    return res.status(500).json({
      error: "Server error",
      details: String(err?.message || err),
    });
  }
}
