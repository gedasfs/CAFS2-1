document.querySelector('button').addEventListener('click', function() {
	axios.get('https://jsonplaceholder.typicode.com/posts').then(response => console.log(response.data));
});