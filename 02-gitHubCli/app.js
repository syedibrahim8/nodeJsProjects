import axios from "axios";
import readline from "readline-sync";

async function github(){
    try {
        let userName =  readline.question("Enter your username: ");
        let output = await axios.get(`https://api.github.com/users/${userName}`)
        let username = output.data.login 
        let fullName = output.data.name;
        let company = output.data.company 
        let location = output.data.location
        let bio = output.data.bio
        let publiRepos = output.data.public_repos
        let followers = output.data.followers 
        let following = output.data.following 
        let accCreate = output.data.created_at 

        console.log(`Username: ${username}`);
        console.log(`Fullname: ${fullName}`);
        console.log(`Comapany: ${company}`);
        console.log(`Location: ${location}`);
        console.log(`Bio: ${bio}`);
        console.log(`Public Repos: ${publiRepos}`);
        console.log(`Followers: ${followers}`);
        console.log(`Following: ${following}`);
        console.log(`Account created: ${accCreate}`);
        // console.log(output.data)
    } catch (error) {
        console.log(error);
    }
}
github()