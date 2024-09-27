/**
 * H2: Lopende gemiddelde
 * Schrijf een script dat aan de gebruiker vraagt om een getal in te geven. Het script zal gemiddelde van de ingegeven getallen bijhouden en telkens afdrukken. Het script stopt wanneer de het gemiddelde boven 25 gaat.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userAverage = 0;

while (true) {
	let userNumber = parseFloat(await userInput.question("Geef ons een getal: "));
	userAverage += userNumber;
	
	if (userAverage <= 25) {
		console.log(`Uw gemiddelde is gelijk aan of is kleiner dan 25.\nUw gemiddelde is: ${userAverage}\n`);
	} else {
		console.log(`Uw gemiddelde is grooter dan 25.\nUw gemiddelde is: ${userAverage}\n`);
		break;
	}
}

process.exit();
