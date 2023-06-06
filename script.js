let date=new Date()
let hours,minutes,seconds,days,month,years
date.getHours()<10 ? hours='0'+date.getHours() :hours=date.getHours()
date.getMinutes()<10 ? minutes='0'+date.getMinutes() :minutes=date.getMinutes()
date.getSeconds()<10 ? seconds='0'+date.getSeconds() :seconds=date.getSeconds()
days=date.getDate()
month=+date.getMonth()+1
years=date.getFullYear()

console.log(hours+':'+minutes+':'+seconds+' '+days+'.'+month+'.'+years);