/**
 * M2: Sterrenpiramide uitbreiden
 * We voegen enkele variabele booleans toe aan onze sterrenpiramide van oefeningenreeks 3: startTop en startLeft. Afhankelijk van of deze variabelen true of false zijn zal de vorm van onze piramide veranderen volgens de voorbeeldoutput hieronder:
 * 
 * let startTop = true;
 * let startLeft = true;
 * let height = 3;
 * 
 * Output:
 * *
 * **
 * ***
 * 
 * 
 * let startTop = false;
 * let startLeft = true;
 * let height = 3;
 * 
 * Output:
 * ***
 * **
 * *
 * 
 * 
 * let startTop = true;
 * let startLeft = false;
 * let height = 3;
 * 
 * Output:
 *   *
 *  **
 * ***
 */

let height = 12,
	stringOutput = "",
	startTop = false,
	startLeft = true;

for (let i = 1; i <= height; i++) {
	// Adding the leading whitespace based on startLeft and startTop
	// We remove 1 because we want to start the whitespace count at 0
	if (!startLeft && startTop) {
		let whiteSpace = Math.abs(height - 1 * i);
		stringOutput += " ".repeat(whiteSpace);
	} else if (!startLeft && !startTop) {
		stringOutput += " ".repeat(i - 1);
	}

	// Adding the stars (*) based on startTop (smallest first or other way around)
	// We repeatedly add a star (*) for the amount of our index i
	if (startTop) {
		stringOutput += "*".repeat(i);
	} else {
		// We add 1 because we don't want 0 as our pyramids's top
		stringOutput += "*".repeat(height - i + 1);
	}

	stringOutput += "\n";
}

console.log(stringOutput);

process.exit();
