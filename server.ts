import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API Key is not configured on the server." });
      }

      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash",
        systemInstruction: `You are the Lead Consultant at AI Pro Consultants, a high-end AI Automation Agency. 
              
        YOUR PERSONALITY:
        - HUMAN-LIKE: No robotic fluff. Get straight to the point.
        - EXTREMELY CONCISE: Maximum 2-3 short sentences. No essays.
        - DIRECTLY RELEVANT: Answer the specific question asked immediately.
        - CONVERSATIONAL: One natural transition like "Honestly," or "Actually," is fine, but brevity is priority.
        - OPINIONATED: Give a direct expert recommendation instead of listing options.

        BUSINESS CONTEXT:
        - AI Pro Consultants automates Sales, CRM, and Workflows (Make.com/custom LLMs).
        - We focus on pure ROI.
        
        CONVERSION:
        - Only suggest "Free AI Audit" or "Book Call" if it naturally fits the conversation.
        
        IMPORTANT: You are a busy expert. Be helpful, be brief, but don't be a typical AI. Stop talking once the answer is given.`
      });

      const history = messages.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const result = await model.generateContent({
        contents: [
          ...history,
          { role: 'user', parts: [{ text: userMessage }] }
        ]
      });

      const response = await result.response;
      res.json({ text: response.text() });
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to communicate with AI." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
