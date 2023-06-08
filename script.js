
/*
Объект Event также содержит в себе тип произошедшего события.
 Под типом понимается название click, 
mouseover и так далее. Тип события содержит свойство type:



*/
function func(e) {
	if(e.type==='click'){
		this.style.backgroundColor='green'
	}
	if(e.type==='dblclick'){
		this.style.backgroundColor='red'
	}
}
let elem = document.querySelector('#elem');

elem.addEventListener('click', func.bind(elem));
elem.addEventListener('dblclick', func.bind(elem));

