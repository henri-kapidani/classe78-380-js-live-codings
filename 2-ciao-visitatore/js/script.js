/*
Ciao Visitatore!
Imposta il nome di colore rosso in vari modi:
Solo con HTML+CSS
Scrivendo su element.style
Aggiungendo la classe con JS
*/

let element = document.getElementById('output');
console.log('ciao');

// let color = prompt('che colore vuoi?');

// element.style.backgroundColor = color;


let nomeClasse = prompt('che classe vuoi?');
element.className = nomeClasse;
