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
  systems_we_build?: Array<{ name: string }>;
  faq?: Array<{ q: string; a: string }>;
  approved_language?: {
    preferred_explanations?: Array<{ topic: string; answer: string }>;
  };
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
   Load Knowledge (FIXED FOR VERCEL)
========================= */
let KNOWLEDGE_CACHE: Knowledge | null = null;

function loadKnowledge(): Knowledge {
  if (KNOWLEDGE_CACHE) return KNOWLEDGE_CACHE;

  // Vercel serverless builds move files — try all common locations
  const candidates = [
    path.join(process.cwd(), "api", "knowledge.json"),
    path.join(process.cwd(), "knowledge.json"),
    path.join(__dirname, "knowledge.json"),
  ];

  let lastErr: any = null;

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
      return raw;
    } catch (e) {
      lastErr = e;
    }
  }

  throw new Error(
    `knowledge.json not loadable. Tried: ${candidates.join(" | ")}. Last error: ${
      lastErr?.message || String(lastErr)
    }`
  );
}

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

function includesAny(text: string, list: string[]) {
  const t = norm(text);
  return (list || []).some((x) => t.includes(norm(x)));
}

// Always return a usable text field so the frontend never falls back
function sendOk(res: VercelResponse, text: string, extra: Record<string, any> = {}) {
  const t = String(text || "").trim() || "Please use Start a Conversation.";
  return res.status(200).json({
    ok: true,
    ...extra,
    answer: t,
    reply: t,
    text: t,
    message: t,
    content: t,
  });
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

function buildSystemsAnswer(k: Knowledge): string {
  const preferred =
    k.approved_language?.preferred_explanations?.find(
      (x) => norm(x.topic) === "what systems do you build?"
    )?.answer ||
    "Veye Media builds connected business systems that align strategy, operations, data, and growth—so execution is consistent and outcomes are measurable.";

  const systems = (k.systems_we_build || [])
    .map((s) => s.name)
    .filter(Boolean)
    .slice(0, 6);

  const list = systems.length ? `Core systems include: ${systems.join(", ")}.` : "";
  return `${preferred} ${list}\n\nFull details: ${CANONICAL_PAGES.frameworks}`.trim();
}

function findFaqAnswer(k: Knowledge, message: string): string | null {
  const q = norm(message);
  for (const item of k.faq || []) {
    if (item?.q && (norm(item.q) === q || q.includes(norm(item.q)))) {
      return String(item.a || "").trim() || null;
    }
  }
  return null;
}

/* =========================
   API Handler (Knowledge-only, Stable)
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
    const KNOWLEDGE = loadKnowledge();
    const handoff = detectHandoff(KNOWLEDGE, message);

    if (!message) {
      return sendOk(res, "Please enter a question, or Start a Conversation.", {
        isHandoff: true,
        href: CANONICAL_PAGES.startConversation,
      });
    }

    if (includesAny(message, ["what systems do you build", "what do you build", "your systems"])) {
      return sendOk(res, buildSystemsAnswer(KNOWLEDGE), {
        isHandoff: false,
        href: CANONICAL_PAGES.frameworks,
      });
    }

    const faq = findFaqAnswer(KNOWLEDGE, message);
    if (faq) {
      return sendOk(res, `${faq}\n\nFull details: ${CANONICAL_PAGES.frameworks}`, {
        isHandoff: false,
        href: CANONICAL_PAGES.frameworks,
      });
    }

    if (handoff.isHandoff) {
      return sendOk(
        res,
        `Absolutely — we can connect you with a real person. Start here: ${CANONICAL_PAGES.startConversation}`,
        { isHandoff: true, href: CANONICAL_PAGES.startConversation }
      );
    }

    return sendOk(
      res,
      KNOWLEDGE.assistant_policy?.fallback_message || "Please use Start a Conversation.",
      { isHandoff: true, href: CANONICAL_PAGES.startConversation }
    );
  } catch {
    return sendOk(
      res,
      "System temporarily unavailable. Please visit our 'Start a Conversation' page.",
      { isHandoff: true, href: CANONICAL_PAGES.startConversation }
    );
  }
}
