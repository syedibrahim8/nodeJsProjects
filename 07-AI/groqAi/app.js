import Groq from "groq-sdk";
import dotenv from "dotenv";
import readline from "readline-sync";
dotenv.config();

const groq = new Groq({ apiKey: process.env.APIKEY});

async function main() {
  let question = readline.question("Drop your thoughts: ")
  const completion = await groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: question
        }
      ],
      model: "llama-3.3-70b-versatile",
    })
  console.log(completion.choices[0].message.content);
}

main();