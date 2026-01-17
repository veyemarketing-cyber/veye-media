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
   Matching helpers (knowledge-only)
========================= */
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
      (x) => normQ(x.topic) === normQ("what systems do you build?")
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
  const q = normQ(message);
  for (const item of k.faq || []) {
    if (item?.q && (normQ(item.q) === q || q.includes(normQ(item.q)))) {
      return String(item.a || "").trim() || null;
    }
  }
  return null;
}

/**
 * Match approved_language.preferred_explanations (exact + soft)
 */
function findPreferredExplanation(k: Knowledge, message: string): string | null {
  const q = normQ(message);
  const list = k.approved_language?.preferred_explanations || [];
  if (!Array.isArray(list) || list.length === 0) return null;

  // Exact match
  const exact = list.find((x) => x?.topic && normQ(x.topic) === q);
  if (exact?.answer) return String(exact.answer).trim() || null;

  // Soft match
  const soft = list.find((x) => {
    const t = normQ(x?.topic || "");
    return t && (q.includes(t) || t.includes(q));
  });
  if (soft?.answer) return String(soft.answer).trim() || null;

  return null;
}

/**
 * Answer “what is <system>” from systems_we_build by matching system name
 */
function findSystemByNameAnswer(k: Knowledge, message: string): string | null {
  const q = normQ(message);
  const systems = k.systems_we_build || [];
  if (!Array.isArray(systems) || systems.length === 0) return null;

  const matched = systems.find((s) => {
    const name = normQ(s?.name || "");
    return name && q.includes(name);
  });
  if (!matched) return null;

  if (matched.what_it_is && String(matched.what_it_is).trim()) {
    return String(matched.what_it_is).trim();
  }

  const parts: string[] = [];
  parts.push(`${matched.name} is one of the core systems Veye Media builds.`);

  const outcomes = Array.isArray(matched.outcomes) ? matched.outcomes.filter(Boolean) : [];
  const includes = Array.isArray(matched.what_it_includes) ? matched.what_it_includes.filter(Boolean) : [];
  const not = Array.isArray(matched.what_it_is_not) ? matched.what_it_is_not.filter(Boolean) : [];

  if (outcomes.length) parts.push(`Outcomes: ${outcomes.join("; ")}.`);
  if (includes.length) parts.push(`Includes: ${includes.join("; ")}.`);
  if (not.length) parts.push(`Not: ${not.join("; ")}.`);

  return parts.join(" ").trim();
}

/* =========================
   API Handler (Knowledge-only)
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

    const { knowledge: KNOWLEDGE, debug } = loadKnowledgeWithDebug();
    if (!KNOWLEDGE) {
      return sendOk(
        res,
        "System temporarily unavailable. Please visit our 'Start a Conversation' page.",
        { isHandoff: true, href: CANONICAL_PAGES.startConversation, debug }
      );
    }

    const handoff = detectHandoff(KNOWLEDGE, message);

    if (!message) {
      return sendOk(res, "Please enter a question, or Start a Conversation.", {
        isHandoff: true,
        href: CANONICAL_PAGES.startConversation,
        sources: [{ type: "knowledge", version: KNOWLEDGE.meta?.version, lastUpdated: KNOWLEDGE.meta?.last_updated }],
      });
    }

    // Systems list
    if (includesAny(message, ["what systems do you build", "what do you build", "your systems"])) {
      return sendOk(res, buildSystemsAnswer(KNOWLEDGE), {
        isHandoff: false,
        href: CANONICAL_PAGES.frameworks,
        sources: [{ type: "knowledge", version: KNOWLEDGE.meta?.version, lastUpdated: KNOWLEDGE.meta?.last_updated }],
      });
    }

    // Preferred explanations (exact/soft)
    const preferred = findPreferredExplanation(KNOWLEDGE, message);
    if (preferred) {
      return sendOk(res, `${preferred}\n\nFull details: ${CANONICAL_PAGES.frameworks}`, {
        isHandoff: false,
        href: CANONICAL_PAGES.frameworks,
        sources: [{ type: "knowledge", version: KNOWLEDGE.meta?.version, lastUpdated: KNOWLEDGE.meta?.last_updated }],
      });
    }

    // System name answer
    const systemAnswer = findSystemByNameAnswer(KNOWLEDGE, message);
    if (systemAnswer) {
      return sendOk(res, `${systemAnswer}\n\nFull details: ${CANONICAL_PAGES.frameworks}`, {
        isHandoff: false,
        href: CANONICAL_PAGES.frameworks,
        sources: [{ type: "knowledge", version: KNOWLEDGE.meta?.version, lastUpdated: KNOWLEDGE.meta?.last_updated }],
      });
    }

    // FAQ match
    const faq = findFaqAnswer(KNOWLEDGE, message);
    if (faq) {
      return sendOk(res, `${faq}\n\nFull details: ${CANONICAL_PAGES.frameworks}`, {
        isHandoff: false,
        href: CANONICAL_PAGES.frameworks,
        sources: [{ type: "knowledge", version: KNOWLEDGE.meta?.version, lastUpdated: KNOWLEDGE.meta?.last_updated }],
      });
    }

    // Handoff intent
    if (handoff.isHandoff) {
      const template = (handoff as any).template ? `\n\n${(handoff as any).template}` : "";
      return sendOk(
        res,
        `Absolutely — we can connect you with a real person. Start here: ${CANONICAL_PAGES.startConversation}${template}`,
        {
          isHandoff: true,
          href: CANONICAL_PAGES.startConversation,
          handoffReason: (handoff as any).reason,
          sources: [{ type: "knowledge", version: KNOWLEDGE.meta?.version, lastUpdated: KNOWLEDGE.meta?.last_updated }],
        }
      );
    }

    // Default fallback (DIAGNOSTIC)
    const preferredTopics = (KNOWLEDGE.approved_language?.preferred_explanations || [])
      .map((x) => String(x.topic || "").trim())
      .slice(0, 10);

    const systemNames = (KNOWLEDGE.systems_we_build || [])
      .map((s) => String(s.name || "").trim())
      .slice(0, 10);

    const faqQs = (KNOWLEDGE.faq || [])
      .map((f) => String(f.q || "").trim())
      .slice(0, 10);

    return sendOk(res, KNOWLEDGE.assistant_policy?.fallback_message || "Please use Start a Conversation.", {
      isHandoff: true,
      href: CANONICAL_PAGES.startConversation,
      sources: [{ type: "knowledge", version: KNOWLEDGE.meta?.version, lastUpdated: KNOWLEDGE.meta?.last_updated }],
      debug: {
        loadedVersion: KNOWLEDGE.meta?.version,
        loadedUpdated: KNOWLEDGE.meta?.last_updated,
        samplePreferredTopics: preferredTopics,
        sampleSystemNames: systemNames,
        sampleFaqQs: faqQs,
      },
    });
  } catch (err: any) {
    return sendOk(res, "System temporarily unavailable. Please visit our 'Start a Conversation' page.", {
      isHandoff: true,
      href: CANONICAL_PAGES.startConversation,
      debug: { handlerError: String(err?.message || err) },
    });
  }
}
