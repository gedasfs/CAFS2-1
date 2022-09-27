import loadQuestion from './actions/loadQuestion';

document.addEventListener('DOMContentLoaded', function() {
	loadQuestion();

	document.getElementById('next-question').addEventListener('click', function() {
		let answersValue = document.querySelector('[name="answer"]:checked')?.value;

		if (answersValue) {
			loadQuestion();
		} else {
			alert('Answer not selected...');
		}
	});
});