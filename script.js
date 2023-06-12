/*
Свойство previousElementSibling содержит предыдущий элемент, 
находящийся в этом же родителе. Если такого элемента нет - возвращается null.

Если соседа сверху нет или он расположен не в родителе нашего элемента, также возвращается null:

Свойство nextElementSibling содержит следующий элемент, находящийся в этом же родителе.
 Если такого элемента нет - возвращается null.
*/ 

let elem = document.querySelector('#elem');
let text = elem.previousElementSibling.textContent;

console.log(text);