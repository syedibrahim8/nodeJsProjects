import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import figlet from "figlet";
import chalk from "chalk";
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json())
console.clear();


app.get("/weather/:city",async (req,res)=>{
    try {
        let cityName = req.params.city
        let apikey = process.env.APIKEY
        const Serverurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
        let response = await axios.get(Serverurl);
        let temp = ((response.data.main.temp) - 273.15).toFixed(2)+" C"
        let pressure = response.data.main.pressure;
        let humidity =response.data.main.humidity;
        let longitude = response.data.coord.lon;
        let latitude = response.data.coord.lat 
        let city = response.data.name

        let weatherDetails = {
            City: city,
            Temp: temp,
            Pressure: pressure,
            Humidity: humidity,
            Longitude: longitude,
            Latitude: latitude 
        }
        console.table(weatherDetails);
        res.status(200).json({msg:weatherDetails})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
});

app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`);
    console.log(chalk.cyanBright(figlet.textSync("Weather CLI",{horizontalLayout:"full"})));
})