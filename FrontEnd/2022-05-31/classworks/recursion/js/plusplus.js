function plusPlus(number, plusTill) {
	for (let i = 0; i < plusTill; i++) {
		// number = number + 1;
		// number += 1;
		number++;
	}

	return number;
}

function plusPlusRecusion(number, plusTill) {
	if (plusTill <= 0) {
		return number;
	}

	number++;
	plusTill--;
	
	return plusPlusRecusion(number, plusTill);
}

console.log(plusPlus(5, 6));
console.log(plusPlusRecusion(5, 6));