
/*
В свойстве key объекта с событием будет лежать нажатый символ:
elem.addEventListener('keypress', function(event) {
	console.log(event.key);
});

А в свойстве code будет лежать код нажатой клавиши:

elem.addEventListener('keypress', function(event) {
	console.log(event.code);
});
key -клавіша на клавіатурі
code: 'KeyD'
keyCode-номерний код клавіші

*/
let elem = document.querySelector('input');
let div = document.querySelector('div');


elem.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		div.textContent =this.value
		this.value=''
	}

});