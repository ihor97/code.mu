/*

В этом случае в свойстве text будет хранится текст оптиона, в свойстве value - 
значение одноименного атрибута, а в свойстве selected - 
значение true или false в зависимости от того, выбранный пункт списка или нет:


*/ 

let select = document.querySelector('#select');
let option = select[0];

console.log(option.text);
console.log(option.value);
console.log(option.selected);