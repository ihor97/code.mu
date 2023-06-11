/*
Можно сделать так, чтобы имена переменных не совпадали с именами ключей объекта:
*/

let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year: y, month: m, day: d} 
	= obj; 

console.log(y); // выведет 2025
console.log(m); // выведет 12
console.log(d); // выведет 31