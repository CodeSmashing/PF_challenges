/**
 * @3: Diamandomtrek
 * Zorg ervoor dat je ook je diamand van de vorige oefeningenreeks enkel als omtrek kan laten zien.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let height = parseInt(await userInput.question("Geef ons de hoogte van de piramide: ")),
	stringOutput = "",
	outline = true;

for (let i = 1; i <= height; i++) {
	// Check if height is even
	let isHeightEven = height % 2 == 0;

	// Determine if we need to adjust for negative values based on current index
	let adjustment = isHeightEven ? ((Math.ceil(height / 2) - i) < 0 ? 1 : 0) : 0;

	// Calculate the amount of whitespace needed before the asterisk
	let whiteSpace = Math.abs(Math.ceil(height / 2) - i + adjustment);
	stringOutput += " ".repeat(whiteSpace) + "*";

	// Exclude the first and last stars
	if (![1, height].includes(i)) {
		// Adding the inner whitespace or determine amount of star fill-in
		// based on current row/index
		let innerWhiteSpace = height - Math.abs((height + 1) / 2 - i) * 2 - 2;
		outline ?
		stringOutput += " ".repeat(innerWhiteSpace) + "*":
		stringOutput += "*".repeat(innerWhiteSpace) + "*";
		/**
		 * Explanation of the Formula:
		 * - (height + 1) / 2 - i: This calculates how far i is from the midpoint of the height.
		 * - Math.abs(...) * 2: This gives us a linear scaling based on distance from the midpoint.
		 * - Subtracting from height: This creates the descending part of the output after reaching the peak.
		 * - Subtracting 1: This adjusts the starting point to match your desired output.
		 */
	}
	// Add a newline character for the next row
	stringOutput += "\n";
}

console.log(stringOutput);

process.exit();

/** Reasoning
 * Previously:
 * console.log((i - 1) * 2 - 1, (height - i) * 2 - 1);
 * Output:
 * -1 15
 * 1 13
 * 3 11
 * 5 9
 * 7 7
 * 9 5
 * 11 3
 * 13 1
 * 15 -1
 *
 *
 * We want a formula that outputs the following (if height = 9):
 * -1
 * 1
 * 3
 * 5
 * 7
 * 5
 * 3
 * 1
 * -1
 *
 *
 * Couldn't figure it out on my own so here's the result from Perplexity AI:
 * https://www.perplexity.ai/search/in-the-following-js-code-we-ha-jZbWwGFoQA2WECllHvAb9g
 */

/** Desired:
	console.log("EoU	< 0	\" \"\n" + isHeightEven + "	", adjustment + "	", whiteSpace + "\n");
	console.log(whiteSpace);

	Desired output (if height = 8, if height = 9):
	3	4
	2	3
	1	2
	0	1
	0	0
	1	1
	2	2
	3	3
		4
	*/
