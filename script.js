
/*
Отмена действия по умолчанию производится с помощью объекта Event. 
Для этого у него есть специальный метод preventDefault(), 
который следует вызвать в любом месте обработчика события.

*/

elem.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('Вы не можете перейти по этой ссылке!'); 
});