/*
В данном уроке мы с вами разберем операцию деструктуризации массивов. 
Данная операция предназначена для массовой записи элементов массива в 
переменные в одну строчку кода.

Синтаксис этой операции следующий:

let [переменная1, переменная2, переменная3] 
	= массив; 
*/ 
let arr = [2025, 12, 31];
let [year, month, day] = arr;