
/*
 во внешней функции запишем this в любую переменную и эта переменная 
 будет доступна во внутренней функции, как и все переменные (обычно эту 
	переменную называют self).
  Таким образом мы передадим this из внешней функции во внутреннюю:
*/ 


"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // выведет 
		'text' 
	
	let self = this; // запишем this в любую переменную, например, в self 
	
	function child() {
		console.log(self.value); // выведет 'text' 
	}
	child();
}
