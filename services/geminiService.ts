
import { GoogleGenAI, Type, Chat } from "@google/genai";
import { AuditFormData, AgenticResponse } from "../types";

const initGenAI = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing. Mocking response for development.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

// --- Image Generation Logic ---

export const generateBrandImage = async (prompt: string): Promise<string | null> => {
  const ai = initGenAI();
  if (!ai) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // Default model for image generation
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        }
      },
    });

    // Iterate through candidates and parts to find the generated image data
    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};

// --- Agentic Audit Logic ---

export const generateAuditAnalysis = async (
  formData: AuditFormData,
  sessionHistory: string[]
): Promise<AgenticResponse> => {
  const ai = initGenAI();

  if (!ai) {
    return {
      analysis: "Configuration Error: API Key missing.",
      strategicHook: "Ensure your API key is set to unlock Agentic AI.",
      intentScore: "N/A"
    };
  }

  const prompt = `
    You are the "Analyst Agent" for Veye Media, an Agentic AI-powered media intelligence firm.
    
    Lead Data:
    Name: ${formData.name}
    Role: ${formData.role}
    Company: ${formData.company}
    Message: ${formData.message}

    Task:
    1. Determine "Intent Score" (Low, Medium, High, Urgent).
    2. Analyze pain points relative to "Systems over Services".
    3. Create a "Strategic Hook" value proposition.

    Return as JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview", // Complex reasoning and strategic analysis task
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            intentScore: { type: Type.STRING },
            analysis: { type: Type.STRING },
            strategicHook: { type: Type.STRING },
          },
          required: ["intentScore", "analysis", "strategicHook"],
        },
      },
    });

    return JSON.parse(response.text || "{}") as AgenticResponse;
  } catch (error) {
    console.error("Audit Analysis Error:", error);
    return {
      analysis: "Signal interruption. Manual review initiated.",
      strategicHook: "Systems thinking required.",
      intentScore: "Unknown"
    };
  }
};

// --- Synapse Chat Agent Logic ---

const SYNAPSE_SYSTEM_INSTRUCTION = `
Role: You are "Synapse," the Conversational AI for Veye Media.
Positioning: Veye Media is an Agentic AI-powered media intelligence firm.
Core Mantra: "We don't sell services. We build and maintain intelligent systems that drive growth."
Pillars: 
1. Agentic AI Systems (Search, Content, Demand Optimization)
2. Digital Growth & Analytics (Lifecycle, Decision Agents)
3. Creative & Platforms (Infrastructure)
4. Media & Audio Production (Integrated systems)

Tone: Professional, systems-focused, data-informed. Avoid agency jargon.
Constraint: Focus on autonomous systems, not manual tasks.
`;

let chatSession: Chat | null = null;

export const createSynapseChat = (): Chat | null => {
  const ai = initGenAI();
  if (!ai) return null;

  chatSession = ai.chats.create({
    model: "gemini-3-pro-preview", // Complex persona and reasoning requirements
    config: {
      systemInstruction: SYNAPSE_SYSTEM_INSTRUCTION,
    },
  });
  return chatSession;
};

export const sendMessageToSynapse = async (message: string): Promise<string> => {
  if (!chatSession) createSynapseChat();
  if (!chatSession) return "System offline.";
  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "No response.";
  } catch (error) {
    console.error("Synapse Chat Error:", error);
    return "Latency in neural core. Please retry.";
  }
};
