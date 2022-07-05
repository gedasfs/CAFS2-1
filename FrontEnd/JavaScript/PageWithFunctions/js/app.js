// https://stackoverflow.com/a/1026087
function firstUpperCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function firstLowerCase(str) {
	return str.charAt(0).toLowerCase() + str.slice(1);
}

function addEventListenerForTextCaseChange(element, inputCase) {
	const actionName = element?.getAttribute('data-action');

	element?.addEventListener('click', event => {
		const value = inputCase.value?.trim();

		if (actionName == 'toUpperCase') {
			inputCase.value = value.toUpperCase();
		} else if (actionName == 'toLowerCase') {
			inputCase.value = value.toLowerCase();
		} else if (actionName in window) {
			inputCase.value = window[actionName](value);
		} else {
			console.warn(`"${actionName}" not found`);
		}
	});
}

function sendToServer(data) {
	const errors = {};

	const response = {
		status: 200
	};

	if ('name' in data == false || data.name.length == 0) {
		errors['name'] = 'Please provide a valid name';
	}

    if ('email' in data == false || !/\S+@\S+\.\S+/.test(data.email)) {
		errors['email'] = 'Please provide a valid email';
	}

	if ('phone_number' in data == false || !/\+3706\d{7}/.test(data.phone_number)) {
		errors['phone_number'] = 'Please provide a valid phone';
	}

	if (Object.keys(errors).length > 0) {
		response.status = 422;
		response.errors = errors;
	}

	return response;
}

const ignoreClassNames = ['text-end'];

function removeClassByStart(figureQuote, classNameStart) {
	[...figureQuote.classList].forEach(name => {
		if (!ignoreClassNames.includes(name) && name.startsWith(classNameStart)) {
			figureQuote.classList.remove(name);
		}
	});
}

function init() {
	document.querySelector('#alert-hello-world')?.addEventListener('click', () => alert('Hello World!'));

	// ----------------------- //

	const inputCase = document.querySelector('#input-case');

	inputCase.parentNode.querySelectorAll('button').forEach(el => addEventListenerForTextCaseChange(el, inputCase));

	// ----------------------- //
	// // https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
	// let nextElement = inputCase.nextElementSibling;

	// while (nextElement) {
	// 	addEventListenerForTextCaseChange(nextElement, inputCase);

	// 	nextElement = nextElement.nextElementSibling;
	// }
	

	// ----------------------- //

	const divNeedsValidation = document.querySelector('#needs-validation');

	divNeedsValidation?.querySelector('button')?.addEventListener('click', () => {
		divNeedsValidation.querySelectorAll('.invalid-feedback').forEach(el => el.remove());
		divNeedsValidation.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

		const data = {};

		divNeedsValidation.querySelectorAll('input[name]').forEach(el => {
			data[el.name] = el.value;
		});

		const response = sendToServer(data);

		// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
		if (response.status == 422) {
			for (let errorName in response.errors) {
				let input = divNeedsValidation.querySelector([`input[name="${errorName}"]`]);

				if (input) {
					input.classList.add('is-invalid');

					const div = document.createElement('div');

					div.classList.add('invalid-feedback');
					div.textContent = response.errors[errorName];

					input.parentNode.appendChild(div);
				}
			}
		} else {
			alert('Data saved successfully');
		}
	});

	// ----------------------- //

	const inpuBlockable = document.querySelector('#input-block-unblock');

	document.querySelector('#input-block')?.addEventListener('click', () => inpuBlockable.disabled = true);
	document.querySelector('#input-unblock')?.addEventListener('click', () => inpuBlockable.disabled = false);

	// ----------------------- //

	const imageChage = document.querySelector('#image-chage');

	imageChage?.addEventListener('mouseover', () => imageChage.src = 'https://i.imgur.com/0DElr0H.jpg');
	imageChage?.addEventListener('mouseout', () => imageChage.src = 'https://i.imgur.com/PLDVxza.jpg');

	const figureQuote = document.querySelector('#quote');

	document.querySelectorAll('#quote-actions a').forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			
			const classNameAction = e.srcElement.getAttribute('data-class');

			if (classNameAction.startsWith('cursor')) {
				removeClassByStart(figureQuote, 'cursor');
			}

			if (classNameAction.startsWith('text')) {
				removeClassByStart(figureQuote, 'text');
			}

			if (classNameAction.startsWith('border')) {
				removeClassByStart(figureQuote, 'border');

				figureQuote.classList.add('border');
			}

			figureQuote.classList.add(classNameAction);
		});
	});

	document.querySelector('#reset-all-styles')?.addEventListener('click', () => {
		removeClassByStart(figureQuote, 'cursor');
		removeClassByStart(figureQuote, 'text');
		removeClassByStart(figureQuote, 'border');
	});
}

document.addEventListener('DOMContentLoaded', init);