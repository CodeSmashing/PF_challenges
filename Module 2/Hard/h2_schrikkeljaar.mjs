/**
 * H2: Schrikkeljaar
 * Schrijf een script dat een jaartal inleest en als output het aantal dagen in februari weergeeft.
 * De 'regels' voor een schrikkeljaar zijn als volgt:
 *
 * Het jaartal is deelbaar door 4 => wel een schrikkeljaar
 * Het jaartal is deelbaar door 100 => geen schrikkeljaar
 * Het jaartal is deelbaar door 400 => toch wel een schrikkeljaar
 *
 * Ja, we beseffen dat deze regels dom zijn maar we hebben ze niet zelf gemaakt.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userYear = parseInt(await userInput.question("Geef ons een jaartal: "));
let leapYear = (userYear % 4 == 0 || userYear % 400 == 0) && userYear % 100 != 0 ? true : false;

console.log(`Het jaartal ${userYear} is ${leapYear ? "wel" : "geen"} een schrikkeljaar.`);

process.exit();
