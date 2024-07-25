// import { readFile } from "node:fs";
import fs from "node:fs/promises";
// import { writeFile } from "node:fs";
import { v4 as uuidv4 } from "uuid";
import { promises } from "node:dns";

const fileName = "quotes.json";
/* const newQuote = {
    id: "949355ba-7916-441d-97b5-3ebd946da8c1",
    quoteText: "This is a quote"
  };*/

export async function getQuotes() {
    try {
        const quotes = await fs.readFile(fileName, 'utf-8');
        console.log (quotes);
    }catch (error){ 
        console.error(error);
    }
}
getQuotes()



export async function addQuote(fileName, newQuote) {
    try {
         await fs.writeFile(fileName, JSON.stringify(newQuote));
         console.log('file written successfully')
     } catch (e) {
        console.error('error wrting new quote', e)
    }
}

addQuote(fileName, {id: "949355ba-7916-441d-97b5-3ebd946da8c1",
    quoteText: "This is a quote"})


export async function getRandomQuote() {
}

export async function editQuote(id, quoteText) {

}

export async function deleteQuote(id) {

}
