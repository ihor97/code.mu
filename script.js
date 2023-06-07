/*
Для того, чтобы поймать момент получения или потери фокуса 
инпутом, в JavaScript предусмотрены специальные события: 
cобытие focus позволяет отловить получение фокуса инпутом,
 а событие blur - потерю
*/
let elem = document.querySelector('#elem');
elem.addEventListener('focus', function() {
	console.log(elem.value);
});