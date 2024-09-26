/**
 * M2: Simpele rekenmachine
 * Vraag twee getallen aan de gebruiker. Vraag vervolgens aan de gebruiker of hij deze wilt optellen, aftrekken, vermenigvuldigen of delen.
 * Voor die operatie uit en geef het resultaat terug.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userNumber1 = parseFloat(await userInput.question("Geef ons een getal: "));
let userOperation = await userInput.question("Wat wilt u doen met dit getal? (+ - * /) ");
let userNumber2 = parseFloat(await userInput.question("Geef ons een ander getal: "));

switch (userOperation) {
	case "+":
		console.log(`Als we ${userNumber1} en ${userNumber2} bij elkaar optellen hebben we ${userNumber1 + userNumber2}`);
		break;
	case "-":
		console.log(`Als we ${userNumber1} en ${userNumber2} van elkaar aftrekken hebben we ${userNumber1 - userNumber2}`);
		break;
	case "*":
		console.log(`Als we ${userNumber1} en ${userNumber2} met elkaar vermenigvuldigen hebben we ${userNumber1 * userNumber2}`);
		break;
	case "/":
		console.log(`Als we ${userNumber1} en ${userNumber2} door elkaar delen hebben we ${userNumber1 / userNumber2}`);
		break;
	default:
		console.log("We begrijpen uw input niet.");
		break;
}

process.exit();
