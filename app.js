// Core Module
// File System
// const fs = require('fs');

// menuliskan string file (syncronous)
// try {
//     fs.writeFileSync('data/test.txt', "Hello World secara syncronous!!");
// } catch (e) {
//     console.log(e)
// }

// menuliskan string file (Asyncronus)
// fs.writeFile("data/test.txt", "Hello World secara Asyncronous!!", (e) => {
//     console.log(e)
// })

// membaca file (Syncronous)
// const data = fs.readFileSync("data/contacts.json", 'utf-8');
// console.log(data);

// membaca file (Asyncronous)
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

const contacts = require("./contacts");

const main = async () => {
    const nama = await contacts.tulisPertanyaan("Masukan nama anda :");
    const email = await contacts.tulisPertanyaan("Masukan email anda :");
    const noHp = await contacts.tulisPertanyaan("Masukan no Hp anda :");

    contacts.simpanContact(nama, email, noHp);
};

main();


