function getPostsFetch() {
	return new Promise(function(resolve) {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(data => resolve(data));
	});
}