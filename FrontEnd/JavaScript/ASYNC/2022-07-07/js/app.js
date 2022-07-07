function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const networkRequestUserCreate = (name, email) => {
	const seconds = randomIntFromInterval(2, 5);

	console.log('networkRequest STARTED');

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			const status = Math.random() < 0.5;

			console.log('networkRequest ENDED', {seconds, status});

			const response = {
				status: status ? 201 : 500,
				message: status ? 'User created seccesfully' : 'Some error',
				timestamp: (new Date).toISOString().replace('T', ' ')
			};

			console.log('networkRequest before resolve');

			if (status) {
				resolve(response); // => await
			} else {
				reject(response); // => await => catch
			}

			console.log('networkRequest after resolve');
		}, seconds * 1000);
	});
};

document?.querySelector('button').addEventListener('click', async function() {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
	try {
		let response = await networkRequestUserCreate('Kiril', 'hello@nonamez.name');

		console.log('success', response);
	} catch(err) {
		console.warn(err.message);
	}
});
