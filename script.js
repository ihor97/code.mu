/*
Давайте теперь поработаем с радиокнопками. 
Они представляют собой группу переключателей, 
из которых может быть выбран только один. 
Чтобы несколько радиокнопочек были группой, 
они должны иметь одинаковое значение атрибута name:

Давайте сделаем так, чтобы по нажатию на кнопку на экран
 вывелось value той радиокнопочки, которая отмечена в данный момент.
*/ 

let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			console.log(radio.value);
		}
	}
});