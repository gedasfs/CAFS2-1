// https://nodejs.org/api/http.html

const fs = require('fs');
const http = require('http');

http.createServer(async function(request, response) {
	console.log(request.url);
	
	const content = fs.readFileSync('users.json');

	response.writeHead(200, {
		'Content-Type': 'application/json'
	});

	response.write(content);
	
	response.end();
}).listen(8080);