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

let menuString = "Kies een artiest:\n",
	userChoice = 0,
	artistArray = [
	{ name: "Red Hot Chili Peppers", topSong: "CALIFORNICATION" },
	{ name: "AC/DC", topSong: "Highway to Hell" },
	{ name: "Netsky", topSong: "I Don't Even Know You Anymore" },
	{ name: "De Strangers", topSong: "Mijnen blauwe geschelpte" },
];

artistArray.forEach((artist, index) => {
	menuString += `${index + 1}. ${artist.name}\n`; // We add 1 so we don't start the list with 0.
});

userChoice = parseInt(await userInput.question(`${menuString}\nGeef je keuze in: `));

// We write "--userChoice" to subtract 1 as the array starts indexing at 0
if (artistArray[--userChoice]) {
	console.log(`Je koos voor "${artistArray[--userChoice].name}"\nZe zijn de artist achter de hit: ${artistArray[--userChoice].topSong}`);
} else {
	console.log(`Sorry maar we hebben keuzes tot maximum ${artistArray.length}.`);
}

process.exit();
