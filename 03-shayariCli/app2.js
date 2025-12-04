import axios from "axios";
import figlet from "figlet";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();
console.clear();

console.log(chalk.cyan(figlet.textSync("SHAYARI CLI",{horizontalLayout:"full"})));

async function shayari(){
    try {
        let sher = await axios.get(process.env.URL)
        console.log(sher.data.msg);
    } catch (error) {
        console.log(error);
    }
}
shayari();