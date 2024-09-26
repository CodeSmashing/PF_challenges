/**
 * H1: Highscore
 * Schrijf een script dat 5 getallen inleest. Toon na het inlezen wat het hoogste getal, het laagste getal en het gemiddelde is.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let numbersArray = [],
	numberLimit = 5,
	numberTotal = 0;

for (let i = 0; i < numberLimit; i++) {
	numbersArray.push(parseFloat(await userInput.question("Geef ons een getal: ")));
}

numberTotal = numbersArray.reduce((accumilator, current) => accumilator + current, 0) / numbersArray.length;

console.log(`Van de getallen die u ons gaf is ${Math.max(...numbersArray)} de grootste, is ${Math.min(...numbersArray)} de laagste en is ${numberTotal} het gemiddelde.`);

process.exit();
