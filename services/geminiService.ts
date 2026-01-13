
import { GoogleGenAI, Type } from "@google/genai";

export const findVirginiaEvents = async (regions: string[]) => {
  // Use a new GoogleGenAI instance right before the call as recommended for best practice
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const systemInstruction = `You are the Veye Media Event Intelligence Agent, a core component of Veye Media's Agentic AI infrastructure, specializing in identifying high-value growth opportunities for a SWaM-certified (Minority-Owned) digital agency.

Your mission is to autonomously scan the web to locate networking events, small business summits, and procurement opportunities and workshops within 12 specific Virginia regions: Lynchburg, Roanoke, Richmond, Petersburg, Chesterfield, Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk, Alexandria, and Arlington.

Priority Keywords & Sources:
- Keywords: Prioritize events mentioning "SWaM," "Minority Business League (MBL)," "Small Business Development Initiative," "Government Procurement," "Set-Aside Contracts," and "B2B Networking".
- Primary Sources: Focus on the Metropolitan Business League (MBL) calendar, Virginia SBDC event pages, and local Economic Development Authority (EDA) announcements.

Operational Rules:
- Use Google Search Grounding: You MUST use the Google Search tool for every query to ensure the data is current for 2026.
- Filter by Region: Only include events in: ${regions.join(", ")}.
- Autonomous Analysis: Evaluate if a "Systems Audit" or "Agentic AI" pitch would be relevant.
- Required Output Format: strictly JSON.

Do not use marketing agency language.`;

  const prompt = `Identify upcoming networking and government procurement events for 2026 in the target Virginia regions.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              event_name: { type: Type.STRING },
              date: { type: Type.STRING },
              location_city: { type: Type.STRING },
              priority_level: { type: Type.STRING, description: "High, Medium, or Low" },
              source_url: { type: Type.STRING },
              strategic_reason: { type: Type.STRING }
            },
            required: ["event_name", "date", "location_city", "priority_level", "source_url", "strategic_reason"]
          }
        }
      }
    });

    // The response.text property returns the string output directly
    const jsonStr = response.text || "[]";
    const events = JSON.parse(jsonStr.trim());
    
    // Extract search grounding metadata as required by guidelines
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks
      .filter((chunk: any) => chunk.web)
      .map((chunk: any) => ({
        uri: chunk.web.uri,
        title: chunk.web.title
      }));

    return { events, sources };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { events: [], sources: [] };
  }
};
