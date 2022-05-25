let nmb = 1000000000;

console.log(nmb);
console.log(nmb + 1);

console.log(1e3);
console.log(1e5);
console.log(1e9, 1e9 == nmb);
console.log(1e9 + 1);
console.log(3.125e7);

let ms = 1e-6

console.log(ms);
console.log(1e-3);
console.log(5e-3);

let a = 0b11111111; // binary 255
let b = 0o377; // octal 255

console.log(a == b);

let num = 255;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
console.log(num.toString(16));// fff
console.log(num.toString(8)); // 377
console.log(num.toString(2)); // 11111111

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Math.PI);

console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.trunc(Math.PI));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
console.log(Math.PI.toFixed(3), +Math.PI.toFixed(3));

console.log(Math.random());