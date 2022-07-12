// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

function loadPosts() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		// https://developer.mozilla.org/en-US/docs/Web/API/Response/json
		.then(response => response.json())
		.then(data => console.log(data));
}

document.querySelector('button').addEventListener('click', function() {
	loadPosts();
});