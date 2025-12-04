import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
console.clear();

app.get("/shayari",(req,res)=>{
    try {
        let shayari = [
            "Log apni Baaton se aur Rawaiyo se maar dete hai\nPhir kehte hai apna khayal rakho",
            "Husn khuda ne diya, Fida hum hogaye\nNaseeeb kisi aur ka tha barbaad hum hogaye",
            "Chupke se bheja tha gulaab unko\nKhusbo ne saare shaher mein tamasha banadiya",
            "Aaj sharab rehnedo\nMohtarma khud aayi hui hai",
            "Ab to jannath bi ameer bete ko milti hogi\nAj kal ke gareeb bete apne maa baap ko khush nahi karpaate",
            "Phool hai gulab ka, Nasha hai sharab ka\nAankhein to dikhri hai, kya faida naqab ka",
            "Mein tabah hu tere ishq mein, tujhe dusron ka khayal hai\nKuch mere maslon par bhi kabhi gaur kar,meri toh puri zindagi ka sawal hai",
            "Hazaa gham hai khulasa kon kare\nMuskura deta hu abb tamasha kon kare"
        ]
        let index = Math.floor(Math.random()*(shayari.length - 0)+0)
        res.status(200).json({msg:shayari[index]})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.listen(port,()=>{
    console.log(`Mehfil saji hui hai apki rah mein at http://localhost:${port}`);
})