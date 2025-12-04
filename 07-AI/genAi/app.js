import { GoogleGenAI } from "@google/genai";
import readline from "readline-sync";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.APIKEY });

async function main() {
    let question = readline.question("What's on your mind: ")
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: question
  });
  console.log(response.text);
}
main();