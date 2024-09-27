/**
 * M3: Priemgetal
 * Vraag een getal aan de gebruiker. Controleer of dit getal een priemgetal is of niet. (Een getal is een priemgetal wanneer het enkel deelbaar is door 1 of door zichzelf)
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

while (true) {
	let userNumber = parseFloat(await userInput.question("Geef ons een getal: "));
	
	if (userNumber % 2 != 0) {
		console.log("Het getal dat u ons gaf is een priemgetal.");
		break;
	} else {
		console.log("Het getal dat u ons gaf is niet priemgetal.");
	}
}

process.exit();
