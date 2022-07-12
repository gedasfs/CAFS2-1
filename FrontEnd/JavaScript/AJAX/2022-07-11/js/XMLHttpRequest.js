// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

function loadPosts() {
	let xhr = new XMLHttpRequest();

	// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event
	xhr.addEventListener('load', function() {
		// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status
		// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText
		
		if (this.status == 200) {
			let data = JSON.parse(this.responseText);
			
			console.log(data);
		}
	});

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

	xhr.send();
}

document.querySelector('button').addEventListener('click', function() {
	loadPosts();
});