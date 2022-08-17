document.addEventListener('DOMContentLoaded', function() {
	const DIV_PROFILE = document.getElementById('profile');

	document.getElementById('submit').addEventListener('click', function() {
		[...document.querySelectorAll('.is-invalid')].forEach(el => el.classList.remove('is-invalid'));
		[...document.querySelectorAll('span.is-invalid-helper')].forEach(el => el.remove());

		const formData = new FormData();

		for (let el of DIV_PROFILE.querySelectorAll('[name]')) {
			if (el.tagName == 'INPUT') {
				if (el.type == 'checkbox' && !el.checked) {
				   continue;
				} else if (el.files && el.files.length > 0) {
					// // multiple file upload
					// let name = el.files.length > 0 ? (el.name + '[]') : el.name;

					// for (let file of el.files) {
					// 	formData.append(name, file);
					// }

					formData.append(el.name, el.files[0]);

					continue;
				}
			}

			formData.append(el.name, el.value);
		}

		fetch('/?module=generate', {
			method: 'POST',
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: formData
		}).then(response => {
			response.json().then(body => {
				if (response.status >= 400) {
					if (response.status == 422 && Object.keys(body.data).length > 0) {
						for (let name in body.data) {
							let el = document.querySelector(`[name=${name}]`);

							if (!el) {
								alert(`${name} => ${body.data[name]}`);

								continue;
							}

							el.classList.add('is-invalid');

							let span = document.createElement('span');
								span.classList.add('ms-2', 'text-danger', 'is-invalid-helper');
								span.innerText = body.data[name];

							el.after(span);
						}
					} else {
						alert(body.message);
					}
				}

				console.log('Success:', body, response.status);
			}).catch(error => {
				console.error('Error:', error);
			});
		});
	});
});