/*
У DOM элементов есть свойство innerHTML, 
позволяющее прочитывать HTML код этих элементов.
*/
let elem = document.querySelector('#elem');
console.log(elem.textContent);
elem.innerHTML = '<i>!!!</i>';
console.log(elem.textContent);
