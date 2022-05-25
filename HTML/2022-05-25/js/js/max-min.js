// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let a = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
    b = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
    c = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
    d = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
    e = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
    f = parseFloat(getRandomArbitrary(1,10).toFixed(2));

console.log(a, b, c, d, e, f);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
console.log(Math.max(a, b, c, d, e, f));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
console.log(Math.min(a, b, c, d, e, f));