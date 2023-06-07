/*
"Конец дня в JavaScript"


*/
// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
// Как вы уже знаете, нули в таком случае можно опустить:
{
let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 
	now.getDate() + 1); 
// Кстати, полночью также будет является время 24:00:00 текущего дня:
}
let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 
	now.getDate(), 24, 0, 0); 