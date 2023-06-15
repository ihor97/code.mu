/*

Давайте теперь при изменении 
селекта выведем на экран текст выбранного пункта списка. 
Для этого нужно прочитать свойство value нашего селекта:

*/ 

let select = document.querySelector('#select');

select.addEventListener('change', function(){
	console.log(this.value);
});