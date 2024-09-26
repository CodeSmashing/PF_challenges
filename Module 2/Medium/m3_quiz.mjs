/**
 * M3: Quiz
 *
 * Bouw een quizspel waarbij de gebruiker 5 vragen moet beantwoorden. Toon of hij de vraag juist of fout heeft en toon achteraf de score van de gebruiker. De vragen mag je zelf kiezen. Een voorbeeld van de input en output ziet er als volgt uit:
 *
 * Welkom bij de quiz! Beantwoord de volgende 5 vragen:
 * Vraag 1: Wat is de hoofdstad van Frankrijk?
 * Jouw antwoord: Parijs
 * Goed antwoord!
 *
 * Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?
 * Jouw antwoord: 9
 * Fout antwoord. Het juiste antwoord is: 8
 *
 * Vraag 3: Wat is het grootste zoogdier ter wereld?
 * Jouw antwoord: Blauwe vinvis
 * Goed antwoord!
 *
 * Vraag 4: Wie schreef het toneelstuk 'Romeo en Julia'?
 * Jouw antwoord: Shakespeare
 * Goed antwoord!
 *
 * Vraag 5: Hoeveel poten heeft een spin?
 * Jouw antwoord: 6
 * Fout antwoord. Het juiste antwoord is: 8
 *
 * Je hebt 3 van de 5 vragen juist beantwoord.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let answerCounter = 0;
let quizArray = [
	{
		question: "Vraag 1: Wat is de hoofdstad van Frankrijk? ",
		answer: "Parijs",
	},
	{
		question: "\nVraag 2: Hoeveel planeten zijn er in ons zonnestelsel? ",
		answer: "8",
	},
	{
		question: "\nVraag 3: Wat is het grootste zoogdier ter wereld? ",
		answer: "Blauwe vinvis",
	},
	{
		question: "\nVraag 4: Wie schreef het toneelstuk 'Romeo en Julia'? ",
		answer: "Shakespeare",
	},
	{
		question: "\nVraag 5: Hoeveel poten heeft een spin? ",
		answer: "8",
	},
];

console.log("Welkom bij de quiz! Beantwoord de volgende 5 vragen:");

for (const quizObj of quizArray) {
	let userResponse = await userInput.question(quizObj.question);
	console.log(`Jouw antwoord: ${userResponse}`);

	if (quizObj.answer.includes(userResponse)) {
		console.log("Goed antwoord!");
		answerCounter++;
	} else {
		console.log(`Fout antwoord. Het juiste antwoord is: ${quizObj.answer}`);
	}
}
console.log(`Je hebt ${answerCounter} van de ${quizArray.length} vragen juist beantwoord.`);

process.exit();
