function init() {
	const calculatableButtons = document.querySelectorAll('button[data-calc-type]');
	const resultInput = document.querySelector('#result');

	let isAfterAction = false;

	let previousResult = null;
	let previousAction = null;

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
	const actionValues = [...calculatableButtons].filter(el => el.getAttribute('data-calc-type') == 'action').map(x => getCalcRealValue(x));

	function isAction(value) {
		return actionValues.includes(value);
	}

	function getCalcRealValue(element) {
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
		return element.hasAttribute('data-calc-value') ? element.getAttribute('data-calc-value') : element.textContent;
	}

	document.querySelector('#reset')?.addEventListener('click', () => {
		isAfterAction = false;

		previousResult = null;
		previousAction = null;

		if (resultInput) {
			resultInput.value = '';
		}
	});

	calculatableButtons.forEach(el => el.addEventListener('click', (e) => {
		if (resultInput) {
			let currentValue = getCalcRealValue(e.target);

			console.log({currentValue, previousResult, previousAction})

			if (isAction(currentValue)) {
				let resultInputValue = Number(resultInput.value);

				if (previousResult === null) {
					previousResult = resultInputValue;
				} else if (previousAction) {
					previousResult = calculateValue(previousResult, resultInputValue, previousAction);

					previousAction = null;

					resultInput.value = previousResult;
				}

				if (currentValue !== '=') {
					previousAction = currentValue;
				}

				isAfterAction = true;

				return;
			} else if (isAfterAction) {
				isAfterAction = false;

				resultInput.value = '';
			}
			
			resultInput.value += currentValue;
		}
	}));
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener('DOMContentLoaded', init);