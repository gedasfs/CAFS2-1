const calculateButton = document.querySelector('#calculate');
const calculatableButtons = document.querySelectorAll('button[data-calc-type]');
const resultInput = document.querySelector('#result');

const errorContainer = document.querySelector('#errors');
const errorMessage = document.querySelector('#errors-message');

function showError(message) {
	errorContainer.style.display = 'block';
	
	if (message && errorMessage) {
		errorMessage.textContent = message;
	}
}

function hideError() {
	errorContainer.style.display = 'none';

	if (errorMessage) {
		errorMessage.textContent = '';
	}
}

function getCalcRealValue(element) {
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
	return element.hasAttribute('data-calc-value') ? element.getAttribute('data-calc-value') : element.textContent;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
const actionValues = [...calculatableButtons].filter(el => el.getAttribute('data-calc-type') == 'action').map(x => getCalcRealValue(x));

// console.log(actionValues);

document.querySelector('#reset')?.addEventListener('click', () => {
	if (resultInput) {
		resultInput.value = '';
	}
});

calculatableButtons.forEach(el => el.addEventListener('click', (e) => {
	hideError();

	if (resultInput) {
		let currentValue = getCalcRealValue(e.target);

		//  If current value is "action"
		if (actionValues.includes(currentValue)) {
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
			let lastInputValueChar = resultInput.value.substring(resultInput.value.length - 1, resultInput.value.length);

			// If last input value char is "action"
			if (actionValues.includes(lastInputValueChar)) {
				showError('Need to select button');

				return;
			}
		}

		// Todo: check for number with more than one zero in start (0007, 00257...)
		resultInput.value = resultInput.value + currentValue;
	}
}));

calculateButton?.addEventListener('click', function() {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
	resultInput.value = `${resultInput.value} = ${eval(resultInput.value)}`;
});