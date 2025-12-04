import readline from "readline-sync";
import figlet from "figlet";
import chalk from "chalk";
import QRCode from "qrcode";
import mailer from "nodemailer";

const menu = [
    { id: 1, name: "Irani Chai", price: 20 },
    { id: 2, name: "Masala Chai", price: 25 },
    { id: 3, name: "Sulaimani Chai", price: 18 },
    { id: 4, name: "Bun Maska", price: 30 },
    { id: 5, name: "Osmania Biscuits", price: 7 },
    { id: 6, name: "Veg Puff", price: 25 },
    { id: 7, name: "Chicken Puff", price: 35 },
    { id: 8, name: "Samosa", price: 20 },
];

const header = () => {
    console.clear();
    console.log(chalk.green(figlet.textSync("CFI Cafe")));
    console.log(chalk.yellow("Best Cafe & Chai In Hyderabad ☕"));
};

const showMenu = ()=>{
    console.log("\n --- Menu ---");
    menu.forEach((item)=>{
        console.log(`${item.id}. ${item.name} - ${item.price}`);
    })
    console.log(`0. Finish order`);
}

let cart = [];

const addItems = ()=>{
    let id = readline.question("\nEnter Item id: ");
    if(id == 0){
        return false;
    }
    let item = menu.find((x)=> x.id == id);
    // console.log(`User selected ${item}`);
    if(!item){
        console.log("Invalid choice");
        return true;
    }
    let qty = readline.question("Enter quantity: ");
    if(qty <= 0){
        console.log("Invalid Quantity");
        return true;
    }
    const cartItems = {
        Id: item.id,
        Item: item.name,
        Price: item.price,
        Quantity: qty
    }
    cart.push(cartItems);
    console.log(`Added ${item.name} X ${qty}`);
    header();
    return true;
}

const bill = ()=>{
    let subTotal = 0;
    let num = 0;
    const tableInfo = cart.map((item)=>{
        const total = item.Price * item.Quantity;
        subTotal += total;
        num ++
        return {
            "S.no": num,
            "Item Name": item.Item,
            "Price": item.Price,
            "Quantity": item.Quantity,
            "Total": `₹${total}`
        }
    })
    console.table(tableInfo);
    const gst = subTotal * 0.05;
    const grandTotal = subTotal + gst

    console.log(chalk.white("-------------------------"));
    console.log(`Subtotal: ₹${subTotal.toFixed(2)}`);
    console.log(`GST (5%): ₹${gst.toFixed(2)}`);
    console.log(chalk.greenBright(`Total: ₹${grandTotal.toFixed(2)}`));
    console.log(chalk.white("-------------------------"));
    return grandTotal.toFixed(2);
}

const customerDetails = ()=>{
    console.log("\n--- Customer Information ---");
    let fName = readline.question("Enter Fullname: ")
    let email = readline.question("Email: ")
    let phone = readline.question("Phone: ")
    console.log(chalk.greenBright(`Thanks ${fName}! 📱Check your bill in SMS/Email shortly! 📧`));
}

async function qrcode(total){
    console.log(chalk.yellow("\n📌 Scan & Pay using UPI\n"));
    const upiString = `upi://pay?pa=8143962005@ibl&pn=CFI-Cafe&tn=undefined&am=${total}&cu=INR`
    QRCode.toString(upiString,{type:"terminal",small:true},(err,qr)=>{
        console.log(qr);
    })
    console.log(chalk.greenBright("❤️ Thank You for Choosing Cafe CFI ☕"));
    console.log(chalk.magenta("Best Cafe & Chai In Hyderabad 🔥"));
}

async function main(){
    header();
    while(true){
        showMenu();
        if(!addItems()){
            break;
        }
    }
    console.clear();
    header()
    const total = bill();
    customerDetails();
    await qrcode(total)
}
main();