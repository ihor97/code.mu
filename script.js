/*
Можно также менять названия переменных на свои при этом задавая значения по умолчанию:

*/
let obj = {
	month: 12,
	day:   31,
};

let {year:y = 2025, month, day} 
	= obj; 

console.log(y);     // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31