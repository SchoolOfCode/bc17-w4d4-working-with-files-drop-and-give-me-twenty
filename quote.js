import { readFile } from "node:fs";
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

export async function getQuotes() {
    try {
        const quotes = await fs.readFile(fileName, 'utf-8');
        console.log (quotes);
    }catch (error){ 
        console.error(error);
    }
}
getQuotes()



export async function addQuote(quoteText) {

}

export async function getRandomQuote() {

}

export async function editQuote(id, quoteText) {

}

export async function deleteQuote(id) {

}
