let sumOfDigitsArrow = (num) => {
    if (Number.isInteger(num)) {
        if (num == 0) {
            return 0;
        }
        let pos = num % 10;
        let n = Math.floor(num / 10);
        return pos + sumOfDigitsArrow(n);
    }
}

function sumOfDigits(num) {
    if (Number.isInteger(num)) {
        if (num == 0) {
            return 0;
        }
        let pos = num % 10;
        let n = Math.floor(num / 10);
        return pos + sumOfDigitsArrow(n);
    }
}

console.log(sumOfDigits(4321));
console.assert(sumOfDigits(4321) == 10);

console.log(sumOfDigitsArrow(4321));
console.assert(sumOfDigitsArrow(4321) == 10);