/*

В предыдущих уроках мы обращались к тегу select, получая или меняя выбранный 
пункт списка. Это на самом деле не обязательно. Ведь можно взять и непосредственно
 какому-нибудь тегу option установить свойство selected в значении true.


*/ 

let select = document.querySelector('#select');
let option = select[2];
option.selected = true;