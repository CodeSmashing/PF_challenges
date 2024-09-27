/**
 * E3: Opteller
 * Maak een heel simpele rekenmachine die twee getallen aan de gebruiker vraagt en de som hiervan weergeeft.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let numberLimit = 2,
	userNumber = [];

for (let i = 0; i < numberLimit; i++) {
	userNumber[i] = parseFloat(await userInput.question("Geef ons een getal: "));
}

let numberSum = userNumber.reduce((acc, number) => acc + number, 0);

console.log(`De som van uw getallen is: ${numberSum}`);

process.exit();
