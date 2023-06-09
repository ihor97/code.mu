
/*
Пусть теперь функция func принимает некоторые параметры, назовем их param1 и param2:

При вызове функции через call можно передать эти параметры вот так:
*/ 


function func(param1, param2) {
	console.log(this.value + param1 + 
		param2); 
}

func.call(elem, param1, param2);