/**
 * @2: Grootste gemene deler
 * Vraag twee getallen aan de gebruiker. Zoek de grootste gemene deler van deze twee getallen.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

const naturalCheck = (number) => { return Math.floor(number) == number; };
let userNumber1 = parseFloat(await userInput.question("Geef ons een getal: ")),
	userNumber2 = parseFloat(await userInput.question("Geef ons een ander getal: ")),
	largestCommDenominator = 1;

for (let i = 2; i < userNumber1 || i < userNumber2; i++) {
	if (naturalCheck(userNumber1 / i) && naturalCheck(userNumber2 / i)) {
		largestCommDenominator = i;
	}
}

console.log(`De grootste gemeenschappelijke deler tussen ${userNumber1} en ${userNumber2} is ${largestCommDenominator}`)

process.exit();


/** Step by step math:
 * 87		340
 * 29	3	100 + 10 + rest(10)
 * 
 * 
 * 123		99
 * 41		33
 * 
 * 41 * 3 = 123
 * 33 * 3 = 99
 * 
 * 
 * In woorden:
 * Als beide getallen te delen zijn door hetzelfde kleinst mogelijke getal en dit geen rest geeft.
 * 
 * 
 * while (true)
 * 	if ((number1 / 2 == natural) && (number2 / 2 == natural))
 * 		common = 2 (found common denominator is 2)
 * 	else if ((number1 / 3 == natural) && (number2 / 3 == natural))
 * 		common = 3 (found common denominator is 3)
 * 	else
 * 		if (!common)
 * 			the only common denominator is 1;
 */
