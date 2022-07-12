function getPostsJQuery() {
	return new Promise(function(resolve) {
		const options = {
			url: 'https://jsonplaceholder.typicode.com/posts',

			success: function(data) {
				resolve(data);
			}
		};

		jQuery.ajax(options);
	});
}