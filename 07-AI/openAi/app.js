import OpenAI from "openai";
import dotenv from "dotenv";
import readline from "readline-sync"
dotenv.config();

let key = process.env.APIKEY;


async function openAI() {
    try {
        let client = new OpenAI({
            apiKey: key
        });

        let userInput = readline.question("Enter Your Question : ")
        // axios.post("http://api.openai.com/chat")
        const complete = await client.chat.completions.create({
            model: "gpt-3.5-turbo", // model download 
            messages: [{ role: "user", content: userInput }]
        })

        console.log(complete.choices[0].message.content)


    } catch (error) {
        console.log(error);
    }
}

openAI()