/**
 * @2: Piramideomtrek
 * Combineer @1 met je sterrenpiramide. Zorg voor een extra parameter outline. Als outline true is zal enkel de omtrek bestaan uit sterren, als het false is laat je gewoon de opgevulde versie zien.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let height = parseInt(await userInput.question("Geef ons de hoogte van de piramide: ")),
	stringOutput = "",
	outline = true;

for (let i = 1; i <= height; i++) {
	if (outline && (i > 1 && i < height)) {
		stringOutput += "*";
		stringOutput += " ".repeat(i - 2);
		stringOutput += "*";
	} else {
		stringOutput += "*".repeat(i);
	}

	stringOutput += "\n";
}

console.log(stringOutput);

process.exit();
