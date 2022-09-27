const questionBlock = document.getElementById('question');
const answersDiv    = document.getElementById('answers');

const nextQuestionButton = document.getElementById('next-question');

function  getAnswer() {
	// let answersValue = answersDiv.querySelector('[name="answer"]:checked');

	// if (answersValue) {
	// 	answersValue = answersValue.value;
	// }
	
	// answersValue = answersValue ? answersValue.value : null;

	// return answersValue;

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
	return answersDiv.querySelector('[name="answer"]:checked')?.value;
}

function generateVariants(variants) {
	for (let a in variants) {
		let li = document.createElement('li');

		let input = document.createElement('input');

		input.setAttribute('class', 'form-check-input me-2');
		input.setAttribute('type', 'radio');
		input.setAttribute('name', 'answer');
		input.setAttribute('id', 'answer-' + a);
		input.setAttribute('value', a);

		input.addEventListener('change', function() {
			nextQuestionButton.disabled = getAnswer() ? false : true;
		});

		li.append(input);

		let label = document.createElement('label');

		label.setAttribute('class', 'form-check-label');
		label.setAttribute('for', 'answer-' + a);

		label.innerText = variants[a];

		li.append(label);

		li.classList.add('list-group-item');

		answersDiv.append(li);
	}
}

function handleResponseErros(response, body) {
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

export default function () {
	let answersValue = getAnswer();

	let options = {
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		},
	}

	if (answersValue) {
		let formData = new FormData;

		formData.append('answer', answersValue);

		options.method = 'POST';
		options.body = formData;
	}

	fetch('/?module=question', options).then(response => {
		response.json().then(body => {
			nextQuestionButton.disabled = true;
			answersDiv.innerHTML = '';

			if (response.status >= 400) {
				handleResponseErros(response, body);

				questionBlock.classList.add('placeholder');

				return;
			}

			console.log('Success:', body);

			questionBlock.innerText = body.data.question;
			questionBlock.classList.remove('placeholder');

			if (body.data.state == 'finish') {
				questionBlock.innerText = body.data.result;
			} else {
				generateVariants(body.data.variants);
			}
		});
	}).catch(error => {
		console.error('Error:', error);
	});
}