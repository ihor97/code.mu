/*
Давайте теперь сделаем так, 
чтобы обработчик события срабатывал на первый клик, 
а потом отвязывался от кнопки. 
Для этого существует специальный метод removeEventListener.
*/
let button = document.querySelector('#button');
button.addEventListener('click', func);

function func() {
	console.log('!!!');
	this.removeEventListener('click', func);
}