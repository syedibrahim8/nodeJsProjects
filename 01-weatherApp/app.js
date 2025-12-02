import readline from "readline-sync";
import axios from "axios";
import figlet from "figlet";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

console.log(chalk.cyanBright(figlet.textSync("Weather CLI",{horizontalLayout:"full"})));

async function apicall(){
    try {
        let cityName = readline.question("Enter City Name:")
        let apikey = process.env.APIKEY
        const myServerurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
        let response = await axios.get(myServerurl);
        let temp = (response.data.main.temp) - 273.15
        let pressure = response.data.main.pressure;
        let humidity =response.data.main.humidity;
        let longitude = response.data.coord.lon;
        let latitude = response.data.coord.lat 
        let city = response.data.name
        // console.log("\tWEATHER CLI");
        // console.log("------------------");
        console.log(`City:${city}`)
        console.log(`Temp:${temp}`);
        console.log(`Pressure:${pressure}`);
        console.log(`Humidity:${humidity}`);
        console.log(`Longitude:${longitude}`);
        console.log(`Latitude:${latitude}`);

    } catch (error) {
        console.log(error);
    }
}
apicall()
