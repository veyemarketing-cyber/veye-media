import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// FIX: Remove @vercel/node import (breaks Vercel build)
// Use lightweight local types instead
type VercelRequest = any;
type VercelResponse = any;

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

// Append a short “learn more” link
function addLearnMore(answer: string, href: string): string {
  return `${answer}\n\nFull details: ${href}`;
}

/* =========================
   RESPONSE GOVERNANCE
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
      "what do you build",
      "what systems do you build",
      "what you build",
    ],
    url: CANONICAL_PAGES.frameworks,
    label: "Full details",
  },
  {
    keywords: [
      "contact",
      "start a conversation",
      "talk to someone",
      "human",
      "pricing",
      "cost",
      "proposal",
    ],
    url: CANONICAL_PAGES.startConversation,
    label: "Start here",
  },
];

function stripExistingLinks(text: string): string {
  return (text || "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function splitSentences(text: string): string[] {
  const cleaned = (text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return [];
  return cleaned.split(/(?<=[.!?])\s+/g).map((p) => p.trim()).filter(Boolean);
}

function enforceMaxSentences(text: string, maxSentences = 5): string {
  const s = splitSentences(text);
  if (s.length <= maxSentences) return s.join(" ").trim();
  return s.slice(0, 3).join(" ").trim();
}

function findRedirectUrl(message: string, answer: string) {
  const haystack = `${norm(message)} ${norm(answer)}`;
  for (const rule of REDIRECT_RULES) {
    for (const k of rule.keywords) {
      if (haystack.includes(norm(k))) return rule;
    }
  }
  return null;
}

function enforceResponseContract(opts: {
  message: string;
  answer: string;
  maxSentences?: number;
}): string {
  let out = stripExistingLinks(opts.answer);
  out = enforceMaxSentences(out, opts.maxSentences ?? 5);

  const rule = findRedirectUrl(opts.message, out);
  if (rule) {
    out = `${out}\n\n${rule.label}: ${rule.url}`;
  }

  return out || opts.answer;
}

/* =========================
   API Handler
========================= */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const message = String(req.body?.message || "").trim();
    if (!message) return res.status(400).json({ error: "Missing message" });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Missing GEMINI_API_KEY" });

    const KNOWLEDGE = loadKnowledge();

    // Fast path
    if (includesAny(message, ["what systems do you build", "what do you build"])) {
      const raw =
        "Veye Media builds connected business systems that align strategy, operations, data, and growth so execution is measurable and scalable.";
      const final = enforceResponseContract({ message, answer: raw });

      return res.status(200).json({
        ok: true,
        answer: final,
        reply: final,
      });
    }

    // Gemini fallback
    const ai = new GoogleGenAI({ apiKey });
    const response = await withTimeout(
      ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: "user", parts: [{ text: message }] }],
      }),
      12000
    );

    const final = enforceResponseContract({
      message,
      answer: response.text || "Please use Start a Conversation.",
    });

    return res.status(200).json({
      ok: true,
      answer: final,
      reply: final,
    });
  } catch (err: any) {
    console.error("api/chat error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
