// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
function UserUsingFunction(name, city, age) {
	this.name = name;
	this.age = age;
	this.city = city;

	this.sayHelloWorld = function() {
		return 'Hello world';
	};

	this.greetings = function() {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
		return `Hello, my name is ${this.name}!`;
	};

	this.sayHelloWorldWithGreetingsAsString = function() {
		return this.sayHelloWorld() + '; ' + this.greetings();
	};

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	this.sayHelloWorldWithGreetingsAsArray = function(someValue) {
		return [
			someValue,
			this.sayHelloWorld(),
			this.greetings()
		];
	};
}