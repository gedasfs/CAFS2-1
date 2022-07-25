import { debounce, groupBy } from 'lodash';

const placeInput = document.querySelector('#place');
const placeSuggestions = document.querySelector('#place-suggestions');
const forecastsDiv = document.querySelector('#forecasts');

const FORECAST_ITEMS = ['forecastTimeUtc', 'airTemperature', 'windDirection', 'windGust', 'windSpeed'];

function showForecastsForPlace(place) {
	fetch(`/api/v1/weather/places/${place.code}/forecasts`).then(r => r.json()).then(forecasts => {
		forecasts.forecastTimestamps = groupBy(forecasts.forecastTimestamps, f => f.forecastTimeUtc.split(' ')[0]);

		for (let date in forecasts.forecastTimestamps) {
			const cardDiv = document.createElement('div');

			cardDiv.classList.add('card', 'mb-2');

			forecastsDiv.appendChild(cardDiv);

			const cardHeaderDiv = document.createElement('div');
			
			cardHeaderDiv.classList.add('card-header');

			cardHeaderDiv.appendChild(document.createTextNode(date));

			cardDiv.appendChild(cardHeaderDiv);

			const mainListUl = document.createElement('ul');

			mainListUl.classList.add('list-group', 'list-group-flush');

			cardDiv.appendChild(mainListUl);

			for (let f of forecasts.forecastTimestamps[date]) {
				const mainListLi = document.createElement('li');

				mainListLi.classList.add('list-group-item');

				const subUl = document.createElement('ul');

				mainListLi.appendChild(subUl);

				for (let item of FORECAST_ITEMS) {
					const subLi = document.createElement('li');

					subLi.appendChild(document.createTextNode(`${item}: ${f[item]}`));

					subUl.appendChild(subLi);
				}

				mainListUl.appendChild(mainListLi);
			}
		}
	});
}

placeInput.addEventListener('input', debounce(function() {
	fetch(`/api/v1/weather/places/${this.value}`).then(r => r.json()).then(places => {
		placeSuggestions.innerHTML = '';
		forecasts.innerHTML = '';
		
		if (places.length > 0) {
			placeSuggestions.style.display = 'block';
		}

		for (let place of places) {
			let button = document.createElement('button');

			button.addEventListener('click', function() {
				button.classList.add('active');

				setTimeout(() => {
					placeSuggestions.innerHTML = '';
				}, 100);

				placeInput.value = place.name;

				showForecastsForPlace(place);

				placeSuggestions.style.display = 'none';
			});

			button.classList.add('list-group-item', 'list-group-item-action');

			button.innerText = place.name;

			placeSuggestions.appendChild(button);
		}
	});
}, 500));