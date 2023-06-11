/*
Аналогичным образом можно деструктуризировать параметры-объекты:


*/
function func({year, month, day}) {
	console.log(year);  // выведет 
		2025 
	console.log(month); // выведет 12
	console.log(day);   // выведет 31
}

func({year: 2025, month: 12, day: 31,});