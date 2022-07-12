const dropdown = document.querySelector('select');
const tbody = document.querySelector('tbody');

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function addItemToTableRow(value, row) {
	let td = document.createElement('td');
	let tdValue = document.createTextNode(value);

	td.appendChild(tdValue);

	row.appendChild(td);
}

function fillTable(data) {
	if (Array.isArray(data)) {
		for (let item of data) {
			let row = document.createElement('tr');

			tbody.appendChild(row);

			addItemToTableRow(item.title, row);
			addItemToTableRow(item.body, row);
			addItemToTableRow(item.userId, row);
		}
	}
}


document.querySelector('button').addEventListener('click', function() {
	tbody.innerHTML = '';

	let functionName = 'getPosts' + capitalizeFirstLetter(dropdown.value);

	if (window[functionName]) {
		window[functionName]().then(data => fillTable(data));
	} else {
		console.error(`Function "${functionName}" not found`);
	}
});

document.querySelector('button').addEventListener('click', async function() {
	tbody.innerHTML = '';
	
	let functionName = 'getPosts' + capitalizeFirstLetter(dropdown.value);

	if (window[functionName]) {
		let data = await window[functionName]();

		fillTable(data);
	} else {
		console.error(`Function "${functionName}" not found`);
	}
});