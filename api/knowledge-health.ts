import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const p = path.join(__dirname, "knowledge.json");
    const raw = JSON.parse(fs.readFileSync(p, "utf8"));

    return res.status(200).json({
      ok: true,
      version: raw?.meta?.version,
      lastUpdated: raw?.meta?.last_updated,
      systemsCount: Array.isArray(raw?.systems_we_build) ? raw.systems_we_build.length : 0,
    });
  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      error: String(err?.message || err),
    });
  }
}
