function sumOfDigits(num) {
    if (num == 0) {
        return 0;
    }

    console.log('sumOfDigits', num, num % 10, Math.floor(num / 10));

    return num % 10 + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(4321));
console.assert(sumOfDigits(4321) == 10);

function sumOfDigitsDebug(num) {
    console.log('sumOfDigits-forward', num, num % 10, Math.floor(num / 10));

    if (num == 0) {
        console.log('Break Point');
        return 0;
    }

    let result = num % 10 + sumOfDigitsDebug(Math.floor(num / 10));

    console.log('sumOfDigits-back', result);

    return result;
}

console.log(sumOfDigitsDebug(4321));
console.assert(sumOfDigitsDebug(4321) == 10);

function sumOfDigitsAsString(num) {
    num = num.toString();
    
    console.log('sumOfDigitsAsString', num, +num[0], num.slice(1));

    return num.length === 0 ? 0 : +num[0] + sumOfDigitsAsString(num.slice(1));
}

console.log(sumOfDigits('4321'));
console.assert(sumOfDigitsAsString('4321') == 10);

function sumOfDigitsAsArray(nums) {

    console.log('sumOfDigitsAsArray', nums);

    if (!Array.isArray(nums)) {
        nums = String(nums).split('');
    }

    if (nums.length === 0) {
        return 0;
    }

    return Number(nums.shift()) + sumOfDigitsAsArray(nums);
}

console.log(sumOfDigitsAsArray(4321));
console.assert(sumOfDigitsAsArray(4321) == 10);