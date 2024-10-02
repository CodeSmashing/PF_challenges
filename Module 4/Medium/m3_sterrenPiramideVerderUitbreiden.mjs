/**
 * M3: Sterrenpiramide nog verder uitbreiden
 * Combineer M1 en M2. Zorg ervoor dat ipv sterren er getallen tevoorschijn komen in de piramide.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let height = parseInt(await userInput.question("Geef ons de hoogte van de piramide: ")),
	stringOutput = "",
	startTop = false,
	startLeft = false;

for (let i = 1; i <= height; i++) {
	// Adding the leading whitespace based on startLeft and startTop
	// We remove 1 because we want to start the whitespace count at 0
	if (!startLeft && startTop) {
		let whiteSpace = Math.abs(height - 1 * i);
		stringOutput += " ".repeat(whiteSpace);
	} else if (!startLeft && !startTop) {
		stringOutput += " ".repeat(i - 1);
	}

	// Adding the stars (*) based on startTop (smallest first or other way around)
	// We repeatedly add a star (*) for the amount of our index i or height
	if (startTop) {
		stringOutput += `${i}`.repeat(i);
	} else {
		// We add 1 because we don't want 0 as our pyramids's top
		stringOutput += `${height - i + 1}`.repeat(height - i + 1);
	}

	stringOutput += "\n";
}

console.log(stringOutput);

process.exit();
