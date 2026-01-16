// services/geminiService.ts
// Client-side chat service: ALWAYS call the serverless API.
// Never import or use GoogleGenAI in the browser.

type ChatApiResponse = {
  ok?: boolean;
  answer?: string;
  reply?: string;
  text?: string;
  message?: string;
  content?: string;
  error?: string;
  details?: string;
};

export async function sendToAssistant(userMessage: string): Promise<string> {
  const r = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage }),
  });

  let data: ChatApiResponse | null = null;
  try {
    data = (await r.json()) as ChatApiResponse;
  } catch {
    // non-JSON response
  }

  if (!r.ok || !data) {
    throw new Error(`Chat API failed: ${r.status}`);
  }

  const text =
    data.text ??
    data.message ??
    data.content ??
    data.reply ??
    data.answer ??
    "";

  if (!text) {
    throw new Error(data.error || "Empty assistant response");
  }

  return text;
}
