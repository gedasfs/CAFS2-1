// Lentelę su id = "age-table".
// Pirmasis <td> toje lentelėje (su id “age”).
// Visus <label> elementus lentelės viduje (jų turėtų būti 3).
// Pirmasis įvestį (<input>) į formą.
// Paskutinę įvestį (<input>) į formą.

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
console.log(document.getElementById('age-table'));
console.log(document.querySelector('#age-table'));

console.log(document.getElementById('age'));
console.log(document.querySelector('#age'));

// V1

let labels = document.getElementsByTagName('label');

if (labels.length > 0) {
	let labelsFromTable = Array.from(labels).filter(e => e.parentNode.nodeName == 'TD');

	console.log(labels);
	console.log(labelsFromTable);
}

// V2

let table = document.getElementById('age-table');

if (table) {
	let labelsFromTable = table.getElementsByTagName('label');

	console.log(labels);
	console.log(labelsFromTable);
}

console.log(document.querySelector('#age-table label'));
console.log(document.querySelectorAll('#age-table label'));

// V3

let inputs = document.querySelectorAll('form > input');

console.log(inputs)
console.log(inputs[0]);
console.log(inputs[inputs.length - 1]);

console.log(document.querySelectorAll('form > input[name]'));
console.log(document.querySelector('form > input[name="username"]'));