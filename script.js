/*
Давайте сделаем кнопку, по нажатию на которую элемент будет то показываться, 
то скрываться. Пусть по умолчанию элемент скрыт (это реализуем с помощью display: none), 
а покажется он с помощью добавления класса active.
 Этот класс будем то добавлять, то убирать с помощью classList.toggle:


*/ 
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
	elem.classList.toggle('active');
});