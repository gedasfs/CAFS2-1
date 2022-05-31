// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
function getMin(a, b) {
	// console.log(arguments);
	return Math.min(a,b);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
const getMinAnonym = function(a, b) {
	return Math.min(a,b);
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const getMinArrow = (a, b) => {
	return Math.min(a,b);
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const getMinArroNoReturn = (a, b) => Math.min(a,b);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
function getMinUniversal() {
	// console.log(arguments);
	// return Math.min.apply(null, [...arguments].filter(Number));
	// return Math.min(...[...arguments].filter(Number));
	// return Math.min.apply(null, arguments);
	// 
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
	return Math.min(...arguments);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
const getMinUniversalArrow = (...parameters) => Math.min(...parameters);

console.log(getMin(4,5), getMinAnonym(4, 5), getMinArrow(4,5), getMinArroNoReturn(4,5));
console.log(getMin(8,5), getMinAnonym(8, 5), getMinArrow(8,5), getMinArroNoReturn(8,5));

console.log(getMinUniversal(8,5,4,7,3,8), getMinUniversalArrow(8,5,4,7,3,8));
console.log(getMinUniversal(8,5,4,7,1,'',8,'a'), getMinUniversalArrow(8,5,4,7,1,'',8,'a'));