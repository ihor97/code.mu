
/*
Следующий метод bind позволяет навсегда привязать контекст к функции.
 Своим результатом этот метод возвращает новую функцию, внутри которой this будет иметь 
жестко заданное значение.
*/ 


let elem = document.getElementById('elem');

function func(param1, param2) {
	console.log(this.value + param1 + 
		param2); 
}

let newFunc = func.bind(elem);
newFunc('1', '2'); // выведет 'text12'

/* 
Не обязательно записывать результат работы bind в новую функцию newFunc,
 можно просто перезаписать func. 
После этого func будет такой же функцией, как и была, но с жестко связанным this:
*/ 

func = func.bind(elem);