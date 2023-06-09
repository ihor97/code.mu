
/*
Третье решение проблемы заключается в использовании стрелочных функций, 
которые не так давно появились в JavaScript. Такие функции, помимо всего прочего,
 не имеют своего контекста, а сохраняют контекст родителя
*/ 


let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // выведет 
		'text' 
	
	let child = () => {
		console.log(this.value); // выведет 
			'text' 
	}
	child();
}