/**
 * E2: Nummer tussen
 * Maak 2 variabelen aan: minimum en maximum. Ken een getal toe aan deze variabelen.
 * Vraag een getal aan de gebruiker. Controleer of dit getal tussen minimum en maximum ligt. Geef de gebruiker iets terug in deze aard: Je getal 16 ligt tussen 4 en 22 of Je getal 11 ligt niet tussen 15 en 84.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let minimum = Math.floor(Math.random() * 100);
let maximum = Math.floor(Math.random() * (100 + 1));

let userNumber = parseFloat(await userInput.question("Geef ons een getal: "));

if (userNumber > minimum && userNumber < maximum) {
	console.log(`Je getal ${userNumber} ligt tussen ${minimum} en ${maximum}.`);
} else {
	console.log(`Je getal ${userNumber} ligt niet tussen ${minimum} en ${maximum}.`);
}

process.exit();
