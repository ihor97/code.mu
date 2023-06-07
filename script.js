// складний селектор 
/*
Метод querySelector, однако, работает не так.
 Он всегда получает только один элемент - первый,
 попавший под указанный селектор.

*/
let elem = document.querySelector('#parent input');
console.log(elem);