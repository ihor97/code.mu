/*
К пользовательским атрибутам можно также обращаться с помощью методов типа getAttribute,
 в этом случае следует писать полное название атрибута:
*/ 

let elem = document.querySelector('#elem');

console.log(elem.getAttribute('data-num'));    // выведет 1000 
console.log(elem.getAttribute('data-my-num')); // выведет 2000