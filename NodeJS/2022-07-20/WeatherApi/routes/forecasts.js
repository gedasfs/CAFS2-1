let express = require('express');
let router = express.Router();
const request = require('request');

router.get('/', async function(req, res, next) {
  let response = await request.get('https://api.meteo.lt/v1/places/klaipeda/forecasts/long-term');

  let data = JSON.parse(response.body);

  data = data.forecastTimestamps.map(d => {

    return {
      name: data.place.name,
      coordinates:  data.place.coordinates,
      createdAt: data.forecastCreationTimeUtc,
      wind: {
        speed: d.windSpeed,
        gust: d.windGust,
        direction: d.windDirection,
      },
      temperature: d.airTemperature
    }
  })

  res.json(data);

});

module.exports = router;
