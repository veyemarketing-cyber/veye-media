import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// FIX: No @vercel/node types (avoids TS build errors on Vercel)
type VercelRequest = any;
type VercelResponse = any;

/* =========================
   ESM-safe __dirname
========================= */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* =========================
   Canonical Pages
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
  brand?: { name?: string };
  assistant_policy?: { fallback_message?: string };
  systems_we_build?: Array<{
    name: string;
    outcomes?: string[];
    what_it_is?: string;
    what_it_includes?: string[];
    what_it_is_not?: string[];
  }>;
  faq?: Array<{ q: string; a: string }>;
  approved_language?: { preferred_explanations?: Array<{ topic: string; answer: string }> };
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
   Helpers
========================= */
function setCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

function norm(s: string) {
  return (s || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function normQ(s: string) {
  return (s || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(text: string, list: string[]) {
  const t = norm(text);
  return (list || []).some((x) => t.includes(norm(x)));
}

/* =========================
   SEND OK (BUILD MARKER ADDED)
========================= */
function sendOk(res: VercelResponse, text: string, extra: Record<string, any> = {}) {
  const t = String(text || "").trim() || "Please use Start a Conversation.";
  return res.status(200).json({
    ok: true,
    buildTag: "diag-2026-01-17a", // 🔎 deterministic deployment marker
    ...extra,
    answer: t,
    reply: t,
    text: t,
    message: t,
    content: t,
  });
}

/* =========================
   Knowledge Load (with runtime diagnostics)
========================= */
let KNOWLEDGE_CACHE: Knowledge | null = null;

function loadKnowledgeWithDebug(): {
  knowledge: Knowledge | null;
  debug: {
    cwd: string;
    __dirname: string;
    candidates: string[];
    exists: Record<string, boolean>;
    lastError?: string;
  };
} {
  const candidates = [
    path.join(process.cwd(), "api", "knowledge.json"),
    path.join(process.cwd(), "knowledge.json"),
    path.join(__dirname, "knowledge.json"),
  ];

  const exists: Record<string, boolean> = {};
  for (const p of candidates) exists[p] = fs.existsSync(p);

  const debug = {
    cwd: process.cwd(),
    __dirname,
    candidates,
    exists,
    lastError: undefined as string | undefined,
  };

  if (KNOWLEDGE_CACHE) return { knowledge: KNOWLEDGE_CACHE, debug };

  for (const p of candidates) {
    try {
      if (!fs.existsSync(p)) continue;

      const raw = JSON.parse(fs.readFileSync(p, "utf8")) as Knowledge;

      if (!raw?.brand?.name) throw new Error("Knowledge missing: brand.name");
      if (!raw?.assistant_policy?.fallback_message)
        throw new Error("Knowledge missing: assistant_policy.fallback_message");
      if (!Array.isArray(raw?.systems_we_build) || raw.systems_we_build.length === 0)
        throw new Error("Knowledge missing: systems_we_build");

      KNOWLEDGE_CACHE = raw;
      return { knowledge: raw, debug };
    } catch (e: any) {
      debug.lastError = String(e?.message || e);
    }
  }

  debug.lastError = debug.lastError || "knowledge.json not found in any candidate path";
  return { knowledge: null, debug };
}

/* =========================
   API Handler
========================= */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return sendOk(res, "Method not allowed. Please use Start a Conversation.", {
      isHandoff: true,
      href: CANONICAL_PAGES.startConversation,
    });
  }

  try {
    const message = String(req.body?.message || "").trim();

    const { knowledge: KNOWLEDGE } = loadKnowledgeWithDebug();
    if (!KNOWLEDGE) {
      return sendOk(res, "System temporarily unavailable.", {
        isHandoff: true,
        href: CANONICAL_PAGES.startConversation,
      });
    }

    return sendOk(res, KNOWLEDGE.assistant_policy?.fallback_message || "Fallback", {
      isHandoff: true,
      href: CANONICAL_PAGES.startConversation,
      sources: [{ type: "knowledge", version: KNOWLEDGE.meta?.version }],
    });
  } catch (err: any) {
    return sendOk(res, "System error.", {
      isHandoff: true,
      href: CANONICAL_PAGES.startConversation,
    });
  }
}
