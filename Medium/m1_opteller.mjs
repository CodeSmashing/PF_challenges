/**
 * M1: Uitbreiden van "Opteller"
 * We gaan onze "Opteller" van de vorige oefening licht aanpassen. In plaats van de gebruiker om de getallen te vragen gaan we zelf twee getallen definiëren. Vervolgens gaan we van deze twee getallen de som, verschil, product en deling laten zien.
 * Verander één van de getallen naar een getal waar quotes rond staan, dus bijvoorbeeld let getal1 = "33";. Bekijk wat voor invloed dit zal hebben op de output van je code.
 */

import * as readline from "node:readline/promises";
import{stdin as input, stdout as output} from "node:process";
const userInput = readline.createInterface({input, output});

let numberInt1 = 17;
let numberInt2 = "10";

let numberSum =  numberInt1 + numberInt2;
let numberDifference =  numberInt1 - numberInt2;
let numberProduct =  numberInt1 * numberInt2;
let numberDivision =  numberInt1 / numberInt2;

console.log(`De gekozen getallen zijn ${numberInt1} en ${numberInt2}\nDe som van de getallen is: ${numberSum}\nHet verschill van de getallen is: ${numberDifference}\nHet product van de getallen is: ${numberProduct}\nDe deling van de getallen is: ${numberDivision}.`);

process.exit();
