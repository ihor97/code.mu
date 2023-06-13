/*
Вы уже знаете, что такое фокус ввода. Вы также знаете, 
как установить или потерять фокус: для установки нужно нажать в поле ввода, 
а для потери - в какое-то другое место.

В JavaScript, однако, существуют специальные методы, 
которые позволяют принудительно установить фокус в инпут или убрать его оттуда.
 Это методы focus и blur.
 
 */ 

 let elem   = document.querySelector('#elem');
 let button = document.querySelector('#button');
 
 button.addEventListener('click', function() {
     elem.focus();
 });