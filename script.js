/*

Давайте теперь будем изменять выбранный пункт с 
помощью JavaScript.



*/ 

let select = document.querySelector('#select');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
	select.value = 'one';
});