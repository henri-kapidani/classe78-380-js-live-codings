/*
Al click di un pulsante, deve apparire un alert con un numero random
*/

/*
selezionare il bottone e metterlo in btnCliccami
settare l'eventlistener al bottone
*/

const btnCliccami = document.querySelector('.btn-primary');

btnCliccami.addEventListener('click', function () {
	const randomInteger = Math.floor(Math.random() * 360 );
	// alert(randomInteger);
	console.log("mi hai cliccato!");
	const eleTitle = document.querySelector('h1');
	eleTitle.style.backgroundColor = `hsl(${randomInteger}, 100%, 50%)`;
});
