/**
 * H1: Aantal seconden
 * Schrijf een script dat aan de hand van een aantal dagen, uren, minuten en seconden de totale tijd in seconden zal berekenen. Een mogelijk voorbeeld van input en output voor dit script is als volgt:
 *
 * Geef het aantal dagen: 1
 * Geef het aantal uren: 15
 * Geef het aantal minuten: 13
 * Geef het aantal seconden: 12
 * Aantal seconden: 141792
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let numberDays = parseInt(await userInput.question("Geef het aantal dagen: ")),
	numberHours = parseInt(await userInput.question("Geef het aantal uren: ")),
	numberMinute = parseInt(await userInput.question("Geef het aantal minuten: ")),
	numberSeconds = parseInt(await userInput.question("Geef het aantal seconden: "));

let totalSeconds = numberSeconds + (numberMinute * 60) + ((numberHours * 60) * 60) + (((numberDays * 24) * 60) * 60);

console.log(`Aantal seconden: ${totalSeconds}`);

process.exit();
