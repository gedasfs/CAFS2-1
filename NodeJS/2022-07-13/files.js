const fs = require('fs');
const fsPromisable = require('fs/promises');
const _path = require('path');

const EXCLUDE_FILES = ['node_modules', '.git'];

function showFilesRecursiveAsync(path) {
	// https://nodejs.org/docs/latest-v17.x/api/fs.html#fsreaddirpath-options-callback
	fs.readdir(path, {
		withFileTypes: true
	}, (err, files) => {
		files.forEach(file => {
			if (EXCLUDE_FILES.includes(file.name)) {
				return;
			}

			// https://nodejs.org/docs/latest-v17.x/api/path.html#pathjoinpaths
			const currentPath = _path.join(path, file.name);

			if (file.isFile()) {
				console.log(currentPath);
			} else {
				showFilesRecursiveAsync(currentPath);
			}
		});
	});
}

// showFilesRecursiveAsync('./');

async function getFilesRecursiveSync(path, excludeFiles = []) {
	let files = await fsPromisable.readdir(path, {
		withFileTypes: true
	});

	let paths = [];

	for (let file of files) {
		if (excludeFiles.includes(file.name)) {
			continue;
		}
		// https://nodejs.org/docs/latest-v17.x/api/path.html#pathjoinpaths
		const currentPath = _path.join(path, file.name);

		if (file.isFile()) {
			paths.push(currentPath);
		} else {
			paths = [...paths, ...(await getFilesRecursiveSync(currentPath, excludeFiles))];
		}
	}

	return paths;
}

// (async function() {
// 	console.log(await getFilesRecursiveSync('./'));
// })();
// 
module.exports.showFilesRecursiveAsync = showFilesRecursiveAsync;
module.exports.getFilesRecursiveSync = getFilesRecursiveSync;
module.exports.EXCLUDE_FILES = EXCLUDE_FILES;