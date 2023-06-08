
/*
Объект Event также содержит в себе тип произошедшего события.
 Под типом понимается название click, 
mouseover и так далее. Тип события содержит свойство type:



*/
elem.addEventListener('click', function(event) {
	console.log(event.type); // выведет 
		'click' 
});