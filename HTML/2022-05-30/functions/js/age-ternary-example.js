function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Did parents allow you?');
	}
}

function checkAgeTernary(age) {
	return (+age > 18) ? true : confirm('Did parents allow you?');
}

let age = 20;
let result = (age > 18) ? true : confirm('Did parents allow you?');