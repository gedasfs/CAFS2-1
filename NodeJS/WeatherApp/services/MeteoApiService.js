const request = require('request');

const API_URL = 'https://api.meteo.lt';

module.exports.getPlaces = function() {
	return new Promise(function(resolve) {
		request.get(`${API_URL}/v1/places`).then(response => {
			let places = JSON.parse(response.body);

			resolve(places);
		});
	});
}

module.exports.getForecastsForPlace = function(code) {
	return new Promise(function(resolve) {
		request.get(`${API_URL}/v1/places/${code}/forecasts/long-term`).then(response => {
			let places = JSON.parse(response.body);

			resolve(places);
		});
	});
}