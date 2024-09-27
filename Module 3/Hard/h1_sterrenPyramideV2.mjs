/**
 * H1: Sterrenpiramide uitbreiden
 * We gaan de sterrenpiramide uit M2 aanpassen. Zorg ervoor dat er nu in plaats van een piramide een diamand te voorschijn komt, dus bijvoorbeeld als hoogte gelijk is aan 5 komt er dit tevoorschijn:
 *	  *
 *	 ***
 *	*****
 *	 ***
 *	  *
 */

let height = 5,
	stringOutput = "";

for (let i = 0; i < height; i++) {
	// Adding the leading whitespace
	let whiteSpace = Math.abs(Math.ceil(height / 2) - 1 - 1 * i);
	stringOutput += " ".repeat(whiteSpace);

    // Determine amount of stars based on current row/index
	let starsCount = (i < Math.ceil(height / 2)) ? (1 + 2 * i) : ((height - i) * 2 - 1);
	stringOutput += "*".repeat(starsCount);

	// Add a newline character for the next row
	stringOutput += "\n";
}

console.log(stringOutput);
