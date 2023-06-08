
/*
С помощью объекта Event можно узнать, 
были ли нажаты в момент события клавиши Ctrl, Alt и Shift.
 Это делается с помощью свойств ctrlKey, altKey и shiftKey -
  они имеют значение true или false в зависимости от того,
 была ли нажата эта клавиша в момент события или нет.

 let elem = document.querySelector('#elem');
 
 elem.addEventListener('click', function(event) {
	 if (event.ctrlKey) {
		 console.log('нажат Ctrl');
	 }
	 
	 if (event.altKey) {
		 console.log('нажат Alt');
	 }
	 
	 if (event.shiftKey) {
		 console.log('нажат Shift');
	 }
 });
*/

let elem = document.querySelector('#elem');

elem.addEventListener('click',e=>{
	if(e.target.tagName==='LI'){
		if(e.ctrlKey){
			e.target.textContent+='1'
		}
		if(e.shiftKey ){
			e.target.textContent+='2'
		}
	}
})