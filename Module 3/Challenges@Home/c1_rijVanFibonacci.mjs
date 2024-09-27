/**
 * @1: Rij van Fibonacci
 * De rij van Fibonacci is een rij getallen waarbij elk getal de som is van de twee voorgaande getallen. De rij begint met 0 en 1. De rij begint dus als volgt: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * Schrijf een script dat de rij van Fibonacci afdrukt tot een bepaald getal. Vraag aan de gebruiker tot welk getal de rij moet afgedrukt worden.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userLimit = parseFloat(await userInput.question("Tot welk getal moeten we de rij van Fibonacci uitrekenen? ")),
	fibonacciPrevious = 0,
	fibonacciNext = 1;

for (let fibonacciSequence = 0; fibonacciSequence <= userLimit;) {
	console.log(fibonacciSequence);

	fibonacciSequence = fibonacciPrevious + fibonacciNext
	fibonacciPrevious = fibonacciNext
	fibonacciNext = fibonacciSequence
}

process.exit();

// Process:
/** // Almost:
	let userLimit = parseFloat(await userInput.question("Tot welk getal moeten we de rij van Fibonacci uitrekenen? "));
	let fibonacciPrevious = 0;
	let fibonacciNext = 1;

	for (let fibonacciSequence = 0; fibonacciSequence <= userLimit;) {
		console.log(fibonacciSequence);

		fibonacciSequence = fibonacciPrevious + fibonacciNext
		fibonacciPrevious = fibonacciSequence
		fibonacciNext = fibonacciPrevious + 1 * fibonacciNext
	}

	// Results in half the sequence:
	// 0
	// 1
	// 3
	// 8
	// 21
	// 55
	// ...
 */

/** // Step by step:
 * 			 = [0]
 * 			 = (1)
 * [0] + (1) = {1}
 * (1) + {1} = [2]
 * {1} + [2] = (3)
 * [2] + (3) = {5}
 * (3) + {5} = [8]
 * ...
 * 
 * 
 * In words:
 * previous next + previous solution = new solution
 * 
 * 
 * In js math:
 * fibonacciSequence = fibonacciPrevious + fibonacciNext
 * fibonacciPrevious = fibonacciNext
 * fibonacciNext = fibonacciSequence
 */
