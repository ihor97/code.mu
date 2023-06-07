/*
Получится, что у нас есть три кнопки. Нажатие на каждую кнопку будет приводить к вызову функции func. 
При этом при каждом клике this будет содержать ссылку на ту кнопку, в которой произошло событие.

То есть каждое нажатие будет выводить в консоль value той кнопки, на которой произошло нажатие, 
но делать это будет одна и та же функция func! Вот в чем преимущество использования this.
*/
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

button1.addEventListener('click', func);
button2.addEventListener('click', func);
button3.addEventListener('click', func);

function func() {
	console.log(this.value);
}