
/*
Нас, однако, ждет неожиданный сюрприз: так как кнопка находится внутри родителя, 
то клик по кнопке одновременно означает и клик по родителю. 
Это значит, что сначала наш блок покажется, 
а затем из-за всплытия события сработает обработчик в родителе и наш блок скроется.

Вот тут-то нам и пригодится возможность отменить всплытие: 
мы можем сделать так, чтобы при клике на кнопку отменить всплытие, 
родитель не реагировал на этот клик.
*/

let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');

button.addEventListener('click', function(e) {
	block.classList.add('active');
e.stopPropagation()

});

parent.addEventListener('click', function() {
	block.classList.remove('active');
});