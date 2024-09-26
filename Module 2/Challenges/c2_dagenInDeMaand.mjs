/**
 * @2: Dagen in de maand v2
 * We gaan E3 en H1 met elkaar combineren. Vraag aan de gebruiker zowel een maand als een jaar. Geef het aantal dagen in die maand terug aan de gebruiker. Gebruik zowel een if/else als een switch/case structuur in je oplossing.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userMonth = await userInput.question("Geef ons een maand: "),
	userYear = parseInt(await userInput.question("Geef ons een jaartal: "));
let leapYear = (userYear % 4 == 0 || userYear % 400 == 0) && userYear % 100 != 0 ? true : false;

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
		if (leapYear) {
			console.log("Deze maand bevat 29 dagen.");
		} else {
			console.log("Deze maand bevat 28 dagen.");
		}
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
