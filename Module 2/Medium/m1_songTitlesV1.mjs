/**
 * M1: Songtitels
 * Maak een keuzemenu met de keuze tussen 4 verschillende artiesten. Lees daarna de keuze in van de gebruiker en toon een songtitel van deze artist. Een voorbeeld hiervan:
 *
 * Kies een artiest:
 * 1. Red Hot Chili Peppers
 * 2. AC/DC
 * 3. Netsky
 * 4. De Strangers
 *
 * Geef je keuze in: 4
 * Je koos voor "De Strangers"
 * Ze zijn de artist achter de hit: Mijnen blauwe geschelpte
 *
 * Maak zowel een versie dat gebruik maakt van if/else en een versie dat gebruik maakt van een switch/case.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userChoice = parseInt(await userInput.question(`Kies een artiest:\n1. Red Hot Chili Peppers\n2. AC/DC\n3. Netsky\n4. De Strangers\n\nGeef je keuze in: `));

if (userChoice == 1) {
	console.log("Je koos voor \"Red Hot Chili Peppers\"\nZe zijn de artist achter de hit: CALIFORNICATION");
} else if (userChoice == 2) {
	console.log("Je koos voor \"AC/DC\"\nZe zijn de artist achter de hit: Highway to Hell");
} else if (userChoice == 3) {
	console.log("Je koos voor \"Netsky\"\nZe zijn de artist achter de hit: I Don't Even Know You Anymore");
} else if (userChoice == 4) {
	console.log("Je koos voor \"De Strangers\"\nZe zijn de artist achter de hit: Mijnen blauwe geschelpte");
} else {
	console.log("Sorry maar we hebben keuzes tot maximum 4.");
}

process.exit();
