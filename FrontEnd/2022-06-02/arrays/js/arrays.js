// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const arrSimple = [
	'Kunigùnda',
	'Jõnas',
	'Nóvaldas'
];

const arrAsObj = new Array(
	'Kunigùnda',
	'Jõnas',
	'Nóvaldas'
);

console.log(arrSimple, arrAsObj);

console.log(arrSimple[0]);
console.log(arrSimple[1]);
console.log(arrSimple[2]);
console.log(arrSimple[4]);

arrSimple[2] = 'Výgas';

arrSimple[5] = 'Kristinà';

console.log(arrSimple);

for (let key in arrSimple) {
	console.log('for-in', key, arrSimple[key]);
}

for (let value of arrSimple) {
	console.log('for-of', value);
}

let indexNameOfJonas = 1;

console.log(arrSimple[indexNameOfJonas]);

const arrSimpleOfObjects = [
	{
		name: 'Kunigùnda',
		age: 23
	},
	{
		name: 'Jõnas',
		age: 24
	},
	{
		name: 'Nóvaldas',
		age: 25
	},
];

function getIndexOf(someArr, name) {
	for (let key in arrSimple) {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
		if (someArr[key]?.name == name) {
			return key;
		}
	}
}

// Only for example
// console.log(
// 	getIndexOf(arrSimpleOfObjects, 'Nóvaldas'),
// 	arrSimpleOfObjects[getIndexOf(arrSimpleOfObjects, 'Nóvaldas')],
// 	arrSimpleOfObjects[getIndexOf(arrSimpleOfObjects, 'Nóvaldas')].age
// );

let userIndex = getIndexOf(arrSimpleOfObjects, 'Nóvaldas');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
console.log(arrSimpleOfObjects[userIndex]?.age);