console.log('Movie file');

class Movie {
	constructor(name, budget, income) {
		this.name = name;

		this.budget = budget;
		this.income = income;
	}

	get name() {
		return this.customName;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
	set name(value) {
		if (value) {
			this.customName = value.trim();
			this.customName = this.customName.toProperCase();
		}
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
	get profit() {
		return this.income - this.budget;
	}

	nonStaticMethod() {
		return {
			// Movie.staticMethod(),
			message: 'NON static method has been called.',
			this: this
		};
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
	static staticMethod() {
		return {
			message: 'static method has been called.',
			this: this
		}
	}
}

module.exports = Movie;