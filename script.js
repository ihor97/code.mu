/*

Как правило, пунктам списка добавляют атрибут value. 
В этом случае свойство value селекта будет содержать 
не текст option, а значение его атрибута value.

*/ 

let select = document.querySelector('#select');

select.addEventListener('change', function(){
	console.log(this.value);
});