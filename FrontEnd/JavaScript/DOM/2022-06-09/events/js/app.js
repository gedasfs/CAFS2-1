// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Element#events
// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
// https://developer.mozilla.org/en-US/docs/Web/API/Event
// 
const inpt = document.querySelector('input');
const slct = document.querySelector('select');

function clickEventHandler(event) {
	// console.log('clickEventHandler', event.target.nodeName, event);
	console.log(inpt.value);
}

const btn = document.querySelector('button');

if (btn) {
	// btn.addEventListener('click', function(event) {
	// 	console.log('anonymous function', event);
	// });

	// btn.addEventListener('click', (event) => {
	// 	console.log('anonymous arrow function', event);
	// });

	// const clickEventHandlerAsVariable = function(event) {
	// 	console.log('clickEventHandlerAsVariable', event);
	// };

	// btn.addEventListener('click', clickEventHandlerAsVariable);

	btn.addEventListener('click', clickEventHandler);
}

// document.querySelector('button:last-of-type')?.addEventListener('click', clickEventHandler);
const allButtons = document.querySelectorAll('button:last-of-type');

if (allButtons.length > 0) {
	allButtons[allButtons.length - 1].addEventListener('click', clickEventHandler);
}

document.querySelector('span')?.addEventListener('click', clickEventHandler);

// https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
inpt?.addEventListener('focus', function(event) {
	// console.log(event);
	slct.style.display = 'inline';
});

// https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
inpt.addEventListener('blur', function(event) {
	// console.log(event);
	slct.style.display = 'none';
});

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
inpt?.addEventListener('change', function(event) {
	console.log('change', event.target.value);
});

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
inpt?.addEventListener('input', function(event) {
	console.log('input', event.target.value);
});