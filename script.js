// складний селектор 
/*

*/
function func1() {
	console.log(1);
}

function func2() {
	console.log(2);
}

const but1=document.querySelector('#button1')
const but2=document.querySelector('#button2')

but1.addEventListener('click',func1)
but2.addEventListener('click',func2)