/**
 * E1: Oppervlakte
 * Maak een script waar je een zijde1 en zijde2 kan ingeven. Geef de oppervlakte van een rechthoek met de afmetingen zijde1 en zijde2.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let side1 = parseFloat(await userInput.question("Geef ons de lengte van een zijde A (in meters of olifanten): ")),
	side2 = parseFloat(await userInput.question("Geef ons de lengte van een zijde B (in meters of olifanten): ")),
	surfaceArea = side1 * side2;

console.log(`De oppervlakte van uw rechthoek is ${surfaceArea}m².`);

process.exit();
