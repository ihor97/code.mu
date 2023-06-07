/*
Для этого существует метод querySelectorAll, 
получающий все теги, подпадающие под 
CSS селектор, в виде массива элементов.
*/
let elems = document.querySelectorAll('.www');

for (let elem of elems) {
	elem.textContent = elem.textContent 
		+ '!'; 
}