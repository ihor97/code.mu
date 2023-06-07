/*

*/
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		console.log(this.textContent);
	});
}