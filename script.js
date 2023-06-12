/*
Свойство parentElement содержит родительский элемент.

Свойство parentNode содержит родительский элемент. 
Существует также почти идентичное свойство parentElement. Отличия: 
для тега html свойство parentNode возвращает document, а parentElement возвращает null.
*/ 

let elem = document.querySelector('#elem');
let id = elem.parentElement.id;

console.log(id);