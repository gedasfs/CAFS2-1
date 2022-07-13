require('./helpers.js');

const files = require('./files.js');

const Movie = require('./classes/Movie.js');

// console.log(Movie);

const movies = [
	new Movie('the shawshank redemption ', 5000, 7000),
	new Movie(' the godfather ', 5000, 7000),
	new Movie('The Dark Knight ', 5000, 7000),
];

for (let m of movies) {
	console.log(m.name, m.profit);
}

// files.showFilesRecursiveAsync('/Users/kiril/Works/code-academy');

(async function() {
	console.log(await files.getFilesRecursiveSync('/Users/kiril/Works/code-academy', files.EXCLUDE_FILES));
})();

const notifier = require('node-notifier');

// Object
notifier.notify({
	title: 'My notification',
	message: 'Hello, there!'
});