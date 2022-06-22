// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
let userObj = new Object();

userObj.name = 'Kiril';
userObj.age = 31;
userObj.city = 'Klaipeda';

userObj.sayHelloWorld = function() {
	return 'Hello world';
};

userObj.greetings = function() {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
	return `Hello, my name is ${this.name}!`;
};

userObj.sayHelloWorldWithGreetingsAsString = function() {
	return this.sayHelloWorld() + '; ' + this.greetings();
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
userObj.sayHelloWorldWithGreetingsAsArray = function(someValue) {
	return [
		someValue,
		this.sayHelloWorld(),
		this.greetings()
	];
};


console.log(userObj.sayHelloWorldWithGreetingsAsArray(123));
