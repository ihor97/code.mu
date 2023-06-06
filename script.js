let date=new Date()
let hours,minutes,seconds,days,month,years
date.getHours()<10 ? hours='0'+date.getHours() :hours=date.getHours()
/*
С помощью объекта Date можно также получить номер текущего дня недели.
 Делается это с помощью метода getDay. Этот метод возвращает числа от 0 до 6-ти,
 причем неделя начинается с воскресенья и этот день имеет номер 0
*/ 