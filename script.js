/*
"День следующего или предыдущего года"


*/

let date=new Date()
date2=new Date(date.getFullYear()-1,date.getMonth(),date.getDate())
console.log(date2.getDay());