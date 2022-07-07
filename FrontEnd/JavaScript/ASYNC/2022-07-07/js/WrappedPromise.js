function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const networkRequestUserCreate = (name, email, callback) => {
	const seconds = randomIntFromInterval(2, 5);

	console.log('networkRequest STARTED');

	setTimeout(() => {
		console.log('networkRequest ENDED', {seconds});

		const status = Math.random() < 0.5;

		const response = {
			status: status ? 201 : 500,
			message: status ? 'User created seccesfully' : 'Error',
			timestamp: (new Date).toISOString().replace('T', ' ')
		};

		callback(response);
	}, seconds * 1000);
};

// document?.querySelector('button').addEventListener('click', function() {
// 	networkRequestUserCreate('Kiril', 'hello@nonamez.name', function(response) {
// 		console.log(response);
// 	});
// });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

document?.querySelector('button').addEventListener('click', function() {
	let userCreatePromise = new Promise(function(resolve, reject) {

		// resolve('before request');

		networkRequestUserCreate('Kiril', 'hello@nonamez.name', function(response) {
			// console.log(response);

			(function() {
				response.function_1 = true;

				(function() {
					response.function_2 = true;

					if (response.status == 201) {
						resolve(response);
					} else {
						reject(response);
					}
				})();
			})()
		});

	});

	userCreatePromise.then(response => {
		console.log('then => ', response);
	}).catch(err => {
		console.log('catch => ', err);
	});
});
