// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

console.log(Movie.staticMethod());
// console.log(Movie.nonStaticMethod());
console.log((new Movie).nonStaticMethod());

const movies = [
	new Movie('the shawshank redemption ', 5000, 7000),
	new Movie(' the godfather ', 5000, 7000),
	new Movie('The Dark Knight ', 5000, 7000),
];

for (let m of movies) {
	console.log(m.name, m.profit);
}