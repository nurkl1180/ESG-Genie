
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface BillData {
  kwh?: number;
  amount?: number;
  m3?: number;
  billType: 'electricity' | 'water';
  date?: string;
}

export const parseUtilityBill = async (base64Image: string, mimeType: string): Promise<BillData> => {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    You are an expert ESG data extraction agent specialized in Malaysian utility bills (TNB for electricity, Syabas/Air Selangor for water).
    Extract the following data from this image:
    1. For TNB (Electricity): Total kWh used, Total Amount (RM), and Bill Date.
    2. For Water: Total m3 used, Total Amount (RM), and Bill Date.
    
    Return the result in JSON format:
    {
      "kwh": number | null,
      "m3": number | null,
      "amount": number | null,
      "billType": "electricity" | "water",
      "date": "YYYY-MM-DD"
    }
    
    Be precise. If you cannot find a value, return null.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inlineData: {
              data: base64Image.split(',')[1] || base64Image,
              mimeType: mimeType
            }
          }
        ]
      }
    ],
    config: {
      responseMimeType: "application/json"
    }
  });

  try {
    return JSON.parse(response.text || "{}");
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    throw new Error("Could not extract data from bill image.");
  }
};
