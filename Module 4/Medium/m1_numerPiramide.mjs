/**
 * M1: Nummerpiramide
 * Schrijf een script dat gebruik maakt van een variabele number en aan de hand van die variabele en één of meerdere lussen de volgende output gaat hebben:
 * 
 * 1
 * 22
 * 333
 * 4444
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let height = parseInt(await userInput.question("Geef ons de hoogte van de piramide: ")),
	stringOutput = "";

for (let i = 1; i <= height; i++) {
	// We repeatedly add the index i as a string character for the amount of our index i
	stringOutput += `${i}`.repeat(i);
	stringOutput += "\n";
}

console.log(stringOutput);

process.exit();
