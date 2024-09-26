/**
 * @1: == vs ===
 * Probeer te zien of onderstaande variabelen gelijk zijn aan elkaar.
 * 
 * let var1 = 11;
 * let var2 = "11";
 * 
 * Vervang je == eens door === en zie of dit iets anders gaat doen. Wat is hier de oorzaak van denk je?
 */

let var1 = 11;
let var2 = "11";

console.log(`De variabelen zijn ${var1} en ${var2}.`);
console.log(`De variabelen zijn ${var1 == 11} en ${var2 == "11"}.`);
console.log(`De variabelen zijn ${var1 === 11} en ${var2 === "11"}.`);
