/* 
Функция, находящая сумму чисел с помощью операторов rest и spread в JavaScript
 */
function func(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum;
}

let result = func(1, 2, 3);
console.log(result); // выведет 6