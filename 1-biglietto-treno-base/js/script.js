/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

/*
INIZIO

chiedere i chilometri e metterli in distance
chiedere l'età e metterla in age

basePrice = 0.21 * distance

SE age < 18
	discountRate = 20
	// discount = basePrice * 0.2
ALTRIMENTI SE age >= 65
	discountRate = 40
	// discount = basePrice * 0.4
ALTRIMENTI
	discountRate = 0
	// discount = 0
FINE SE

totalPrice = basePrice - basePrice * discountRate / 100
// totalPrice = basePrice - discount;

restituire totalPrice

FINE
*/

const distance = parseFloat(prompt('Quanti chilometri?'));
const age = parseInt(prompt('Quanti anni hai?'));

const pricePerKilometer = 0.21;
const basePrice = pricePerKilometer * distance;
let discountRate = 0;

if (age < 18) {
	discountRate = 20;
} else if (age >= 65) {
	discountRate = 40;
}

// alternativa A
let totalPrice = basePrice - basePrice * discountRate / 100;
totalPrice = parseFloat(totalPrice.toFixed(2));
console.log('Il prezzo del biglietto è: ' + totalPrice);

/*
// alternativa B
let totalPrice = basePrice - basePrice * discountRate / 100;
console.log('Il prezzo del biglietto è: ' + totalPrice.toFixed(2));
*/