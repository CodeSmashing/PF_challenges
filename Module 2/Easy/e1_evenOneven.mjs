/**
 * E1: Even of oneven
 * Vraag een getal aan de gebruiker. Controleer of dit getal even of oneven is (met behulp van de restoperator %). Print even of oneven af naar de gebruiker.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let number = parseFloat(await userInput.question("Geef ons een getal: "));

if (number % 2 == 0) {
	console.log("Het getal was even.");
} else {
	console.log("Het getal was oneven.");
}

process.exit();
