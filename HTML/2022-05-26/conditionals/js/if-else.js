// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// const moneyPerDay = getRandomInt(50);
const moneyPerDay = 22;
const glassesPrice = 25;

const weekDay = 3;

console.log({moneyPerDay, weekDay});

if (moneyPerDay >= glassesPrice) {
	console.log('Can buy');
} else if (weekDay == 3 && (moneyPerDay >= (glassesPrice - 5))) {
	console.log('Can buy with discount');
} else {
	console.log('Can\'t buy');
}