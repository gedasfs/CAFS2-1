function handleResponse(content) {
	console.log(content);

  	alert(content.message);
}

window.addEventListener('DOMContentLoaded', (event) => {
	document.querySelector('#submit-ajax-JSON')?.addEventListener('click', async function() {
		const data = {};

		document.querySelectorAll('#profile [name]:not([type="file"])')?.forEach(el => {
			let name = el.getAttribute('name');

			if (name.endsWith('[]')) {
				name = name.replace('[]', '');

				if (!(name in data)) {
					data[name] = [];
				}

				if (el.checked) {
					data[name].push(el.value);
				}
			} else {
				data[name] = el.value;
			}
		});

		const rawResponse = await fetch(window.location.href, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			
			body: JSON.stringify(data)
		});
		
		const content = await rawResponse.json();

		handleResponse(content);
	});

	// https://developer.mozilla.org/en-US/docs/Web/API/FormData
	document.querySelector('#submit-ajax-FormData')?.addEventListener('click', async function() {
		const formData = new FormData();

		document.querySelectorAll('#profile [name]')?.forEach(el => {
			const elementAttrType = el.getAttribute('type');

			if (elementAttrType == 'checkbox' && !el.checked) {
				return;
			}

			if (elementAttrType == 'file') {
				formData.append(el.getAttribute('name'), el.files[0]);
			} else {
				formData.append(el.getAttribute('name'), el.value);
			}
		});

		const rawResponse = await fetch(window.location.href, {
			method: 'POST',
			body: formData,
			headers: {
				'Accept': 'application/json',
			},
		});
		
		const content = await rawResponse.json();

  		handleResponse(content);
	});
});
