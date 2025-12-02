import axios from "axios";
import figlet from "figlet";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config()

console.clear()
console.log(chalk.cyan(figlet.textSync("JOKES CLI",{horizontalLayout:"full"})));

async function jokes(){
    try {
        let response = await axios.get(process.env.URL)
        console.log(response.data[0].setup);
        console.log(response.data[0].punchline);
    } catch (error) {
        console.log(error);
    }
}
jokes()