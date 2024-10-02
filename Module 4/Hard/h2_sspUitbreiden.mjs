/**
 * H2: SSP uitbreiden
 * Zorg ervoor dat het spelletje schaar/steen/papier blijft door gaan tot de gebruiker of de computer 3 maal heeft gewonnen. Vraag elke keer opnieuw aan de gebruiker wat hij wilt 'gooien' en maak laat de computer elke keer een nieuwe keuze maken met computerChoice = choices[Math.floor(Math.random()*choices.length)];
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userChoice = "",
	userStreak = 0,
	choices = ['rock', 'paper', 'scissors'],
	computerChoice = "",
	computerStreak = 0,
	winningCondition = true;

while (userStreak < 3 && computerStreak < 3) {
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
		userStreak++;
	} else {
		console.log(`De computer zijn ${computerChoice} verslaagd jouw ${userChoice}!`);
		computerStreak++;
	}
	console.log(`Steak speler: ${userStreak}, streak computer ${computerStreak}.\n\n`);
}

process.exit();
