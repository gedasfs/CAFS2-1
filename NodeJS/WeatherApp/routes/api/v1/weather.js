const MeteoApiService = require('../../../services/MeteoApiService');

const express = require('express');
const router = express.Router();

router.get('/places/:name', function(req, res, next) {
	MeteoApiService.getPlaces().then(places => {
		places = places.filter(p => p.name.toLowerCase().startsWith(req.params.name.toLowerCase()));

		places = places.slice(0, 10);

		res.json(places);
	});
});

router.get('/places/:code/forecasts', function(req, res, next) {
	MeteoApiService.getForecastsForPlace(req.params.code).then(forecasts => res.json(forecasts));
});

module.exports = router;
