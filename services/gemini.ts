
import { GoogleGenAI } from "@google/genai";

// API key is obtained exclusively from the environment variable
const API_KEY = process.env.API_KEY as string;

export class GeminiService {
  private static instance: GoogleGenAI;

  private static getInstance() {
    if (!this.instance) {
      // Initialize with the required named parameter
      this.instance = new GoogleGenAI({ apiKey: API_KEY });
    }
    return this.instance;
  }

  static async askAssistant(prompt: string): Promise<string> {
    const ai = this.getInstance();
    try {
      // Use ai.models.generateContent directly to query the model
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: `Eres "MTM AI", el asistente creativo de la agencia "Marca Tu Marca". 
          Tu tono es profesional, creativo, inspirador y directo. 
          MTM es una agencia de producción creativa de contenidos audiovisuales, estrategias digitales y diseño.
          Tu objetivo es convencer a los usuarios de que MTM es la mejor opción para sus proyectos.
          Habla siempre en español con un toque moderno y dinámico.`,
          temperature: 0.8,
        },
      });
      // Extract generated text directly from the .text property
      return response.text || "Lo siento, tuve un pequeño fallo en el sistema creativo. ¿Puedes repetir?";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Parece que hay interferencia en la red creativa. Por favor, intenta de nuevo.";
    }
  }
}
