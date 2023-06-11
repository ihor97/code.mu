/*
При деструктуризации объектов можно также указывать значения по умолчанию. При этом,
 в отличии от деструктуризации массивов, необязательной может быть любая переменная - 
 не обязательно с конца массива. Давайте, например, укажем значение по умолчанию для 
 переменной year:

*/
let obj = {
	month: 12,
	day:   31,
};

let {year = 2025, month, day} = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31