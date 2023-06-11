/*
Если в массиве меньше элементов, чем переменных, то 
в "лишние" переменные запишется undefined:

Если в массиве больше элементов, чем переменных - лишние элементы 
никуда не запишутся и ничего страшного не произойдет.
*/
{
	let arr = [2025, 12];
	let [year, month, day] = arr;
	console.log(year);  // выведет 2025
	console.log(month); // выведет 12
	console.log(day);   // выведет undefined 
}

let arr = [2025, 12, 31, 23, 59,
	59];
let [year, month, day] = arr;
console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31