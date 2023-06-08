
/*
Дело в том, что на самом деле this всегда содержит элемент, к 
которому было привязано событие, а свойство target - элемент, по которому реально был клик. 
Этот реальный элемент может совпадать с this, а может не совпадать.

В описанном случае получится, что свойство target будет содержать конечный тег, 
в котором случилось событие - то есть абзац, а не див

Свойство tagName содержит имя тега в верхнем регистре (большими буквами).
*/

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	console.log(event.target); // выведет  наш абзац 
// 	console.log(this);         // выведет наш див 
// });

let elem = document.querySelector('#elem');

elem.addEventListener('click',e=>{
	if(e.target.tagName==='LI'){
		e.target.textContent+='!'
	}
	
	if(e.target.tagName==='UL'){
		console.log('ul');
	}

})

