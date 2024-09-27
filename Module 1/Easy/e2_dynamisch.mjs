/**
 * E2: Content dynamischer maken
 * We gaan onze vorige oefening iets gaan aanpassen.
 * Vanaf nu willen we niet meer enkel deze dingen gaan bepalen in onze code, maar we gaan de gebruiker elke keer achter de input vragen.
 * De output van het script blijft dezelfde.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userName = await userInput.question("Wat is uw naam? "),
	userAge = parseInt(await userInput.question("Wat is uw leeftijd? ")),
	userFavoriteGame = await userInput.question("Wat is uw favoritete game? ");

console.log(`Hallo ${userName}, ik hoor dat je ${userAge} jaar oud bent en dat je lievelingsgame ${userFavoriteGame} is.`);

process.exit();
