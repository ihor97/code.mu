/*
Пусть мы хотим отвязать
 эту функцию от абзаца после клика по этому абзацу.
 Нас, однако, ждет проблема: у функции нет имени, 
 а значит мы не сможем обратится к ней по этому имени, 
 чтобы отвязать ее.

Для решения проблему нужно дать имя функции, 
сделав из нее именованное функциональное выражение. 
Сделаем это:

*/
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function func()
		 { 
		console.log(this.textContent);
		this.removeEventListener('click', func); // отвязываем функцию 
	});
}