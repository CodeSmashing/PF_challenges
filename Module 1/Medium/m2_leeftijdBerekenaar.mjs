/**
 * M2: Leeftijdberekenaar
 * Schrijf een script waar je twee variabelen gebruikt, geboorteJaar en toekomstJaar. Laat je script uitprinten hoe oud je zal zijn in toekomstJaar.
 * Hou er rekening mee dat je twee verschillende leeftijden zou kunnen zijn in toekomstJaar, dus zorg ervoor dat je output iets is in de vorm van: In 2031 zal ik 24 of 25 jaar oud zijn.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let futureYear = 2300, // Arbitrary number
	birthYear = parseInt(await userInput.question("Wat is uw geboorte jaar? "));

console.log(`In ${futureYear} zal ik ${futureYear - birthYear} of ${futureYear - birthYear + 1} jaar oud zijn`);

process.exit();
