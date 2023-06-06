let date = new Date();

console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц
console.log(date.getDate());     // день

console.log(date.getHours());    // часы
console.log(date.getMinutes());  // минуты
console.log(date.getSeconds());  // секунды

// Учтите, что месяц, который возвращает метод getMonth, 
// начинается с нуля - январь нулевой, февраль первый и так далее.