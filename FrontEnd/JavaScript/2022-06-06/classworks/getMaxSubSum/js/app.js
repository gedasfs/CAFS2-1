let arr = [11, -2, 34, 45, 19, 6];

function getMaxSubSum(arr) {
	let sum = 0;

	for (let value of arr) {
		if (value > 0) {
			sum += value;
		}
	}

	return sum;
}

console.log(getMaxSubSum(arr));
console.assert(getMaxSubSum(arr) == 115);

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function getMaxSubSumForEach(arr) {
	let sum = 0;

	// arr.forEach(function(value) {
	// 	if (value > 0) {
	//         sum += value;
	//     }
	// });
	
	arr.forEach(value => {
		if (value > 0) {
			sum += value;
		}
	})

	return sum;
}

console.log(getMaxSubSumForEach(arr));
console.assert(getMaxSubSumForEach(arr) == 115);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function getMaxSubSumReduce(arr) {
	return arr.reduce((previousValue, currentValue, currentIndex, fullArray) => {
		// console.log('getMaxSubSumReduce', {previousValue, currentValue, currentIndex, fullArray});

		if (currentValue > 0) {
			previousValue += currentValue;
		}

		return previousValue;
	}, 0);
}

console.log(getMaxSubSumReduce(arr));
console.assert(getMaxSubSumReduce(arr) == 115);

console.log(arr.reduce((p, c) => c > 0 ? p + c : p, 0));

// const getMaxSubSumReduceArrowInline = function(arr) {
// 	return arr.reduce((p, c) => c > 0 ? p + c : p, 0);
// }

const getMaxSubSumReduceArrowInline = arr => arr.reduce((p, c) => c > 0 ? p + c : p, 0);

console.log(getMaxSubSumReduceArrowInline(arr));