/*
"Циклическая проверка моментов времени в JavaScript"


*/
// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
// Как вы уже знаете, нули в таком случае можно опустить:

let now  = new Date();
let amount=0
    for (let i = 2023; i <= now.getFullYear(); i++) {
       (new Date(i,0,1).getDay()===0||new Date(i,0,1).getDay()===6)&&amount++
    }
    console.log(amount);