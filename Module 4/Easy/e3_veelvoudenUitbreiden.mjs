/**
 * E3: Veelvouden uitbreiden
 * Pas je vorige script aan. Zorg ervoor dat je aan de hand van de variabelen deelbaar1 en deelbaar2 kan kiezen of een getal wel of niet deelbaar moet zijn door deler1 of deler2 om ze weer te geven.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let start = parseFloat(await userInput.question("Met welk getal beginnen we? ")),
	end = parseFloat(await userInput.question("Met welk getal eindigen we? ")),
	divider1 = parseFloat(await userInput.question("Wat is het eerste getal waarop we testen? ")),
	divider2 = parseFloat(await userInput.question("Wat is het tweede getal waarop we testen? ")),
	divideable1 = parseFloat(await userInput.question("Wat is het derde getal waarop we testen? ")),
	divideable2 = parseFloat(await userInput.question("Wat is het vierde getal waarop we testen? "));

// I honest to god do not understand the assignment
for (let i = start; i <= end; i++) {
	if (i % divideable1 == 0 && i % divideable2 == 0) {
		if (i % divider1 == 0 && i % divider2 == 0) {
			console.log(`Het getal ${i} ligt tussen ${start} en ${end} en is zowel deelbaar door ${divider1} en ${divider2}.`);
		}
	}
}

process.exit();
