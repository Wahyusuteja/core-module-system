// Core Module
// File System
const fs = require('fs');

// menuliskan string file (syncronous)
try {
    fs.writeFileSync('data/test.txt', "Hello World secara syncronous!!");
} catch (e) {
    console.log(e)
}

// menuliskan string file (Asyncronus)
fs.writeFile("data/test.txt", "Hello World secara Asyncronous!!", (e) => {
    console.log(e)
})

// membaca file (Syncronous)
const data = fs.readFileSync("data/contacts.json", 'utf-8');
console.log(data);

// membaca file (Asyncronous)
fs.readFile("data/test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
})

// Readline
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukan nama anda : ", (nama) => {
    rl.question("Masukan no HP anda : ", (noHp) => {
        const contact = { nama, noHp };
        const file = fs.readFileSync("data/contacts.json", "utf8");
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

        console.log("Terimakasih sudah menginput data")
        
            rl.close()
});
});



