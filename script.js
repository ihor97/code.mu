/*
Метод contains позволяет проверить, содержит ли один элемент внутри себя другой.
 Параметром метода передается элемент, который будет проверяться на то,
 что он находится внутри элемента, к которому применился метод.
*/ 

let parent = document.querySelector('#parent');
let child = document.querySelector('#child');

let contains = parent.contains(child);
console.log(contains);