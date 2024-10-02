/**
 * H1: Schaar/Steen/Papier
 * We gaan een simpele versie van rock/paper/scissors maken. Vraag aan de gebruiker of ze rock, paper or scissors willen 'gooien'. Je kan de computer random laten kiezen met de volgende code:
 * 
 * let choices = ['rock', 'paper', 'scissors'];
 * let computerChoice = choices[Math.floor(Math.random()*choices.length)];
 * // We bekijken deze syntax in module 6, momenteel kan je gewoon copy/pasten
 * 
 * Laat zien of de gebruiker of computer heeft gewonnen.
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userChoice = "",
	winningCondition = true,
	choices = ['rock', 'paper', 'scissors'],
	computerChoice = choices[Math.floor(Math.random()*choices.length)];

while (true) {
	userChoice = await userInput.question("Rock, paper or scissors? ");

	if (choices.includes(userChoice.toLowerCase())) {
		break;
	}

	console.log("Voor het gemak van het programeren zoeken we specifiek naar de engelse woorden (rock, paper, scissors).\n");
}

switch (userChoice) {
	case "rock":
		if (computerChoice == "rock") {
			winningCondition = null;
		} else if (computerChoice != "paper") {
			winningCondition = true;
		} else {
			winningCondition = false;
		}
		break;

	case "paper":
		if (computerChoice == "paper") {
			winningCondition = null;
		} else if (computerChoice != "scissors") {
			winningCondition = true;
		} else {
			winningCondition = false;
		}
		break;

	case "scissors":
		if (computerChoice == "scissors") {
			winningCondition = null;
		} else if (computerChoice != "rock") {
			winningCondition = true;
		} else {
			winningCondition = false;
		}
		break;
}

if (winningCondition == null) {
	console.log(`Jouw ${userChoice} en de computer zijn ${computerChoice} cancelen elkaar uit!`);
} else if (winningCondition) {
	console.log(`Jouw ${userChoice} verslaagd de computer zijn ${computerChoice}!`);
} else {
	console.log(`De computer zijn ${computerChoice} verslaagd jouw ${userChoice}!`);
}

process.exit();
