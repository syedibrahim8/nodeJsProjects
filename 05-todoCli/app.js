import readline from "readline-sync";
import figlet from "figlet";
import bcrypt from "bcrypt";
import fs from "fs/promises"

const db = "/home/ibrahim/nodeJsProjects/05-todoCli/db.json"

function loadData(){
    return JSON.parse(fs.readFile(db,"utf-8"));
}

function saveData(content){
    fs.writeFile(db,JSON.stringify(content,null,2))
}

function banner(){
    console.log(chalk.cyan(figlet.textSync("TODO CLI", { horizontalLayout: "full" })));
}

function 