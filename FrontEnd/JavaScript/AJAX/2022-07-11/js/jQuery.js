document.querySelector('button').addEventListener('click', function() {
	const options = {
		url: 'https://jsonplaceholder.typicode.com/posts',

		success: function(data) {
			console.log('success', data);
		}
	};

	jQuery.ajax(options);

	jQuery.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts'
	}).done(function(data) {
		console.log('done', data);
	});
	
	jQuery.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
		console.log('getJSON', data);
	});
});