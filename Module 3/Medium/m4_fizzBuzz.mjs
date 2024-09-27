/**
 * M4: FizzBuzz
 * Maak een applicatie dat alle getallen tussen 1 en 100 afprint. Maar voor getallen deelbaar door 3 print je "Fizz" af, voor getallen deelbaar door 5 print je "Buzz" af en voor getallen deelbaar door 3 en 5 print je "FizzBuzz" af
 */

let numberLimit = 100;

for (let i = 1; i < numberLimit; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz");
	} else if (i % 3 == 0) {
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
