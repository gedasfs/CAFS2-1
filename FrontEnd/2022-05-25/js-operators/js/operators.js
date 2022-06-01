// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators
let str = 'Hello World';
let otherStr = str;

console.log(str, otherStr);

console.log('---------');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
console.log(3 + 1);
console.log(5 - 2);
console.log(4 / 2);
console.log(4 * 2);
console.log(12 / 5, 12 % 5);

console.log('---------');

let num = 4;

num++;
num = num + 1;
num++;

console.log(num);

num--;

console.log(num);

console.log('---------');

num = 1;

console.log(num, 1 + (++num));
console.log(num);

console.log('---------');

num = 1;

console.log(num, 1 + (num++));
console.log(num);

console.log('---------');

num = 1;
num += 5; // num = num + 5;
console.log(num);

num -= 3; // num = num - 3;
console.log(num);

console.log('---------');

num = 1;
num += 'a';

console.log(num);

console.log('---------');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators

console.log('5 > 2', 5 > 2);
console.log('5 < 2', 5 < 2);
console.log('5 <= 2', 5 <= 2);
console.log('5 >= 5', 5 >= 5);
console.log('5 == 2', 5 == 2);
console.log('5 == 5', 5 == 5);
console.log("5 == '5'", 5 == '5', ", 5 === '5'", 5 === '5');
console.log("5 != '5'", 5 != '5', ", 5 !== '5'", 5 !== '5');

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
console.log(1 != 2 && 3 != 3);
console.log(1 != 2 || 3 != 3);
console.log(3 != 3 || 1 != 2);