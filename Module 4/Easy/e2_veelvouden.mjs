/**
 * E2: Veelvouden
 * Schrijf een script met de volgende variabelen:
 * 
 *		start: Met welk getal beginnen we?
 * 		end: Met welk getal eindigen we?
 * 		deler1: Wat is het eerste getal waarop we testen?
 * 		deler2: Wat is het tweede getal waarop we testen?
 * 
 * Zorg ervoor dat het script het volgende gaat uitprinten: alle getallen tussen start en end die deelbaar zijn door zowel deler1 als deler2.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let start = parseFloat(await userInput.question("Met welk getal beginnen we? ")),
	end = parseFloat(await userInput.question("Met welk getal eindigen we? ")),
	divider1 = parseFloat(await userInput.question("Wat is het eerste getal waarop we testen? ")),
	divider2 = parseFloat(await userInput.question("Wat is het tweede getal waarop we testen? "));

for (let i = start; i <= end; i++) {
	if (i % divider1 == 0 && i % divider2 == 0) {
		console.log(`Het getal ${i} ligt tussen ${start} en ${end} en is zowel deelbaar door ${divider1} en ${divider2}.`);
	}
}

process.exit();
