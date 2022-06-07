// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

let i = 0;

while(i < 5) {
	console.log(i);
	i++;
}

i = 1;

while(i <= 5) {
	console.log(i);
	i++;
}

i = 1;

while(i <= 5) {
	console.log(i);
	i = 6;
}

console.log('after while');