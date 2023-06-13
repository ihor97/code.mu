/*
Следующее событие, которое мы с вами изучим, называется input.
 Оно возникает каждый раз при вводе нового символа в инпут или textarea.*/ 

 let elem = document.querySelector('#elem');

 elem.addEventListener('input', function() {
     console.log(this.value);
 });