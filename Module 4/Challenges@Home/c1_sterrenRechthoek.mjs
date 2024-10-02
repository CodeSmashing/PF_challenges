/**
 * @1: Sterrenrechthoek
 * Vraag een hoogte en breedte aan de gebruiker. Teken een omtrek van een rechthoek met deze hoogte en breedte. Bijvoorbeeld:
 * 
 * height: 4
 * width: 5
 * 
 * Output:
 * *****
 * *   *
 * *   *
 * *****
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let height = parseInt(await userInput.question("Geef ons de hoogte van de piramide: ")),
	width = parseInt(await userInput.question("Geef ons de breedte van de piramide: ")),
	stringOutput = "";

for (let i = 1; i <= height; i++) {
	// Adding the stars (*) based on width
	if (i == 1 || i == height) {
		// We add the full width of our rectangle in stars (*) if we are at the
		// beginning or end
		stringOutput += "*".repeat(width);
	} else {
		// We add a star (*) at the beginning and the end of a line and we add
		// the leading whitespace based on width
		stringOutput += "*";
		stringOutput += " ".repeat(width - 2);
		stringOutput += "*";
	}

	stringOutput += "\n";
}

console.log(stringOutput);

process.exit();
