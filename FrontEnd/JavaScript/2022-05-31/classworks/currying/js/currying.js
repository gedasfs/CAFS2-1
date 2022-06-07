// https://javascript.info/currying-partials
// https://stackoverflow.com/a/45643938

function sum(n,m,o,p){
	return n + m + o + p;
}
 
function curry(fn){ 
	return function(...a) {
		return a.length >= fn.length ? fn(...a) : curry(fn.bind(fn,...a));
	};
}

let csum = curry(sum); // now csum is the curried version of sum

console.log(csum(1,2,3,4));      // <- 10
console.log(csum(1)(2,3,4));     // <- 10
console.log(csum(1,2)(3,4));     // <- 10
console.log(csum(1,2,3)(4));     // <- 10
console.log(csum(1)(2)(3,4));    // <- 10
console.log(csum(1)(2)(3)(4));   // <- 10