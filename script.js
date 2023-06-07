/*
"Момент времени дня"


*/
// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
let date1 = new Date();
let date2 = new Date(date1.getFullYear(),date1.getMonth(),date1.getDate()-1,12 ); 

console.log((date1 - date2)/3600000);