/*
Формат timestamp предназначен для нахождения разницы между датами.
*/

let now=new Date()
let birth=new Date(1997,7,5)
let diff=(now.getTime()-birth.getTime())/(1000*60*60*24*365)
console.log(diff);