// function getPostsAxios() {
// 	return new Promise(function(resolve) {
// 		axios.get('https://jsonplaceholder.typicode.com/posts').then(response => resolve(response.data));
// 	});
// }
// 
function getPostsAxios() {
	return new Promise(async function(resolve) {
		let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		
		resolve(response.data);
	});
}