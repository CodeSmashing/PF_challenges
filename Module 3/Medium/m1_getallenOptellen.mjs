/**
 * M1: Getallen optellen
 * Maak een applicatie dat getallen aan de gebruiker vraagt en deze optelt bij elkaar zolang het ingegeven getal groter is dan 0. Van zodra de gebruiker een getal kleiner of gelijk aan 0 ingeeft print de applicatie de som af.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let number = 1,
	sum = 0;

while (number > 0) {
	number = parseFloat(await userInput.question("Geef ons een getal: "));
	sum += number;
}

console.log(sum);

process.exit();
