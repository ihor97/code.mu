
/*
Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору.

<p id="elem" class="www"></p>
let elem = document.querySelector('#elem');
console.log(elem.matches('p.www'));
true
*/

let div = document.querySelector('div');

div.addEventListener('click', function(event) {
	if (event.target.matches('div')) {
		console.log('клик именно по диву'); 
	}
	if (event.target.matches('p')) {
		console.log('клик именно по абзацу'); 
	}
});