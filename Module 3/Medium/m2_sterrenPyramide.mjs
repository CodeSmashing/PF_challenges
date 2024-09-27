/**
 * M2: Sterrenpiramide
 * 
 * Gebruik een variabele hoogte. We gaan aan de hand van hoogte een sterrenpiramide bouwen. Per laag van de piramide komt er een ster bij. Dus bijvoorbeeld als hoogte gelijk is aan 4 zal de afgedrukte piramide er zo uit zien:
 * 	*
 * 	**
 * 	***
 * 	****
 */

let height = 5,
	stringOutput = "";

for (let i = 0; i < height; i++) {
	// We repeatedly add a star (*) for the amount of our index i
	// We add 1 extra because at 0 we don't get a star
	stringOutput += "*".repeat(i + 1);
	stringOutput += "\n";
}

console.log(stringOutput);
