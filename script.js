/*
Свойство classList содержит псевдомассив CSS классов элемента, 
а также позволяет добавлять и удалять классы элемента,
 проверять наличие определенного класса среди классов элемента.
*/ 

let elem = document.querySelector('#elem');

let length = elem.classList.length;
console.log(length);