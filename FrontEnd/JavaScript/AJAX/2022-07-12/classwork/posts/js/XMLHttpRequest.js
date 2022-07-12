function getPostsXMLHttpRequest() {
	return new Promise(function(resolve) {
		let xhr = new XMLHttpRequest();

		xhr.addEventListener('load', function() {
			if (this.status == 200) {
				let data = JSON.parse(this.responseText);
				
				resolve(data);
			}
		});

		xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

		xhr.send();
	});
}