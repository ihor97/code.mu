/*
В данном уроке вы с вами разберем событие change, возникающее в полях ввода при их изменениях. 
*/ 

let elem = document.querySelector('#elem');

elem.addEventListener('change', function() {
	console.log(this.value);
});