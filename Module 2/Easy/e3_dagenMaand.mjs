/**
 * E3: Dagen in de maand
 * Gebruik een switch/case om te controleren hoeveel dagen de variabele maand heeft.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userMonth = await userInput.question("Geef ons een maand: ");

switch (userMonth.toLowerCase()) {
	case "jan":
	case "januari":
	case "maa":
	case "maart":
	case "mei":
	case "jul":
	case "juli":
	case "aug":
	case "augustus":
	case "okt":
	case "oktober":
	case "dec":
	case "december":
		console.log("Deze maand bevat 31 dagen.");
		break;

	case "feb":
	case "februari":
		console.log("Deze maand bevat 28 dagen (29 in een schrikkeljaar).");
		break;

	case "apr":
	case "april":
	case "jun":
	case "juni":
	case "sep":
	case "september":
	case "nov":
	case "november":
		console.log("Deze maand bevat 30 dagen.");
		break;

	default:
		console.log("De maand die u ons gaf is niet herkend als een geldige maand.");
		break;
}

process.exit();
