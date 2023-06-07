/*
При работе с атрибутами существует исключение - 
это атрибут class. 
Это слово является специальным в JavaScript и 
поэтому мы не можем просто написать elem.class,
 чтобы считать значение атрибута class. 
Вместо этого следует писать elem.className.
*/
let elem = document.querySelector('#elem');
console.log(elem.className);