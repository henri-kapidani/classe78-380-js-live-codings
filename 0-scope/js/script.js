let wordA = 'word A globale';
let wordB = 'word B globale';

if (true) {
	const wordC = 'word C';
	console.log('wordC', wordC);

	let wordA;
	wordA = 'word A blocco';
	console.log('wordA', wordA);
}

console.log('wordA', wordA);
console.log('wordB', wordB);
// console.log('wordC', wordC);


let stringa = 'ciao a wordA';
let stringa2 = `ciao a ${wordA} e ${wordB}`;

console.log(stringa);
console.log(stringa2);
