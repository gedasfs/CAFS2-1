// Parašykite funkciją checkNumber, turinčią vieną parametrą, kuri:

// Patikrins skaičius nuo 1 iki (begalybės - 1)
// Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"
// Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"
// Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"
// Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"

function checkNumber(num) {
	// Patikriam ar parametras yra skaičius
	if (isNaN(num)) { // if (!isNaN(num))
		return false;
	}

	const numMod3 = num % 3;
	const numMod5 = num % 5;

	// Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"
	if (numMod3 === 0 && numMod5 === 0) {
		return 3;
	}

	// Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"
	if (numMod3 === 0) {
		return 1;
	}

	// Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"
	if (numMod5 === 0) {
		return 2;
	} 

	// Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"
	return 4;
}

const values = ['a', 3, 5, 'b', 14, 15];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (let x of values) {
	let message = 'Ne skaičius';

	const result = checkNumber(x);

	if (result == 1) {
		message = 'Skaičius dalijasi iš 3';
	} else if (result == 2) {
		message = 'Skaičius dalijasi iš 5';
	} else if (result == 3) {
		message = 'Skaičius dalijasi iš 3 ir iš 5';
	} else if (result == 4) {
		message = 'Skaičius nesidalija nei iš 3 nei iš 5';
	}

	console.log(x, message);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (let x of values) {
	let message = null;

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
	switch (checkNumber(x)) {
		case 1:
			message = 'Skaičius dalijasi iš 3';
		break;

		case 2:
			message = 'Skaičius dalijasi iš 5';
		break;

		case 3: 
			message = 'Skaičius dalijasi iš 3 ir iš 5';
		break;

		case 4:
			message = 'Skaičius nesidalija nei iš 3 nei iš 5';
		break;

		default:
			message = 'Ne skaičius';
		break;
	}

	console.log(x, message);
}