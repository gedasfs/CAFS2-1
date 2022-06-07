function askAge() {
	let age = prompt('What is your age?');

	if (age === null) {
		return false;
	}

	age = Number(age);

	if (age > 0 && age < 120) {
		return age;
	}

	return askAge();
}

console.log(askAge());