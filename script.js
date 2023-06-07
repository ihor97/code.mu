/*
Для этого существует метод querySelectorAll, 
получающий все теги, подпадающие под 
CSS селектор, в виде массива элементов.
*/
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', func);
}
function func() {
	console.log(this.textContent); // выводим 	текст абзаца 
}