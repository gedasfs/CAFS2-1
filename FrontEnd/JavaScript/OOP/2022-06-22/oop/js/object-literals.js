let userArr = [
	'Kiril', // Name
	'Klaipeda', // City
	31 // Age
];

console.log(userArr[1]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals
let userObj = {
	name: 'Kiril',
	age: 31,
	city: 'Vilnius',

	sayHelloWorld: function() {
		return 'Hello world';
	},

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	greetings() {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
		return `Hello, my name is ${this.name}!`;
	},

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	sayHelloWorldWithGreetingsAsString() {
		return this.sayHelloWorld() + '; ' + this.greetings();
	},

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	sayHelloWorldWithGreetingsAsArray() {
		return [
			this.sayHelloWorld(),
			this.greetings()
		];
	}

	// city: 'Klaipeda',
};

userObj.name = 'Andrius';
userObj.getKeys = function() {
	return Object.keys(this);
};

console.log(userObj.getKeys());

console.log(userObj.city);
console.log(userObj.sayHelloWorld());
console.log(userObj.greetings());
console.log(userObj.sayHelloWorldWithGreetingsAsString());
console.log(userObj.sayHelloWorldWithGreetingsAsArray());

let userObj2 = {
	name: 'Karolis',
	age: 31,
	city: 'Kaunas',
};

let users = [
	userObj, 
	userObj2,
	{
		name: 'Kristijonas',
		age: 31,
		city: 'Klaipeda',
	}
];

console.log(users);
console.log(users[2].city);
console.log(users[2]['city']);

// const KEY = 'city';
// const KEY = 'name';
const KEY = 'age';

console.log(users[2][KEY]);

// console.log(users[2][function() {
// 	return 'city';
// }()]);