// Bring in Models
const Weather = require('../models/weather');

module.exports = app => {

  //Get Weather
  app.get('/weather', (req, res) => {
    Weather.find({}, (err, Weather) => {
      console.log('azhg');
      if (err) {
        console.log(err);
      } else {
        console.log(Weather);
        res.json(Weather);
      }
    });
  });

  //Post Weather
  app.post('/weather', (req, res) => {
    let newWeather = new Weather(req.body);

    newWeather.save((err, weather) => {
      if (err) {
        res.send('m:p');
      } else {
        res.json(weather);
      }
    });
  });
};
