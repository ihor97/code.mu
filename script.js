/*
Объект this удобен, когда элемент, 
в котором произошло событие, и элемент, 
с которым совершаются действия в результате события, -
 это один и тот же элемент.
*/
let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);
function func() {
	console.log(this.value='cscscss'); 
}