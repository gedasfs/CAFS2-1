// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class UserUsingClass {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
	constructor(name, city, age) {
		this.name = name;
		this.age = age;
		this.birthdayYears = (new Date()).getFullYear() - age;
		this.city = city;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	sayHelloWorld() {	
		return 'Hello world';
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	greetings() {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
		return `Hello, my name is ${this.name}!`;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	sayHelloWorldWithGreetingsAsString() {
		return this.sayHelloWorld() + '; ' + this.greetings();
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	sayHelloWorldWithGreetingsAsArray(someValue) {
		return [
			someValue,
			this.sayHelloWorld(),
			this.greetings()
		];
	}
}