
/*
Так как вызов child осуществляется в родительской функции, 
то и передаваемый this указывает на то, что нужно. 
Затем этот this попадает в параметр param и 
в таком виде и будет доступен внутри функции.
*/ 


let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	child(this); // передаем параметром this
	
	function child(param) {
		console.log(param.value); // выводим value инпута 
	}
}