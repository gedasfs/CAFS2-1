// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

for (let i = 0; i < 5; i++) {
	console.log('for 0 < 5', i);
}

for (let i = 1; i <= 5; i++) {
	console.log('for 1 <= 5', i);
}

for (let i = 5; i > 0; i--) {
	console.log('for 5 > 0', i);
}

for (let i = 5; i >= 0; i--) {
	console.log('for 5 >= 0', i);
}

for (let i = 1; i <= 10; i+= 2) {
	console.log('even numbers', i);
}

let arr = ['a', 'b', 'c', 'd'];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
for (let index in arr) {
	console.log('for in', index);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (let value of arr) {
	console.log('for of', value);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
let text = '';

for (let i = 0; i < 10; i++) {
	console.log('continue-before', i);

	if (i === 3) {
		continue;
	} else if (i === 5) {
		continue;
	}

	console.log('continue-after', i);

	text = text + i;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
text = '';

for (let i = 0; i < 10; i++) {
	console.log('break-before', i);

	if (i === 3) {
		break;
	}

	console.log('break-after', i);

	text = text + i;
}

console.log(text);