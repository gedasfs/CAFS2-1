const numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

const arrMultiplied = (numbers, num) => numbers.map(value => value * num);

// Async
document?.querySelector('button').addEventListener('click', function() {
	console.log('0 => arrMultiplied', arrMultiplied(numbers, 1));
});

// Async
console.log('timeoutID =>', setTimeout(function() {
	console.log('Hello World');
}, 1000));

console.log('1 => arrMultiplied', arrMultiplied(numbers, 2));

// Async
console.log('timeoutID =>', setTimeout(function() {
	console.log('2 => arrMultiplied', arrMultiplied(numbers, 3))
}, 3000));

console.log('3 => arrMultiplied', arrMultiplied(numbers, 4));
console.log('4 => arrMultiplied', arrMultiplied(numbers, 5));

