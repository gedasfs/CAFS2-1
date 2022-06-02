// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

let i = 0;

do {
	console.log(i);
	i++;
} while(i < 5)

i = 1;

do {
	console.log(i);
	i++;
} while(i <= 5)


i = 5;
let j = 5;

do {
	console.log('do-while', i);
	i++;
} while (i < 5);

while (j < 5) {
	console.log('while', j);
	j++;
}
