// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const arrSimple = [
	'Kunigùnda',
	'Jõnas',
	'Nóvaldas'
];

console.log(arrSimple.length, arrSimple);

console.log(arrSimple[0]); // first array element
console.log(arrSimple[arrSimple.length - 1]); // last array element

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
let arrayCount = arrSimple.push('Juõzas');
console.log(arrSimple);

arrayCount = arrSimple.push('Elìmantas', 'Gilvinà', 'Aigùstas');
console.log(arrSimple);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
arrayCount = arrSimple.unshift('Juõzas');
console.log(arrSimple);

arrayCount = arrSimple.unshift('Elìmantas', 'Gilvinà', 'Aigùstas');
console.log(arrSimple);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
let lastName = arrSimple.pop();
console.log(lastName);
console.log(arrSimple);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
let firstName = arrSimple.shift();
console.log(firstName);
console.log(arrSimple);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
// for (const key of arrSimple.keys()) {
// 	console.log(key);
// }
// 

arrSimple[3] = 'Agne';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
console.log(arrSimple.join(', '));

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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const found = arrSimpleOfObjects.find(element => element.name == 'Jõnas');

console.log(found);
