/*
Давайте теперь сделаем так, 
чтобы обработчик события срабатывал на первый клик, 
а потом отвязывался от кнопки. 
Для этого существует специальный метод removeEventListener.
*/
let button = document.querySelector('#button');
function func() {
    this.value++
    this.value==10&&button.removeEventListener('click',func)
}
button.addEventListener('click',func)