let mongoose = require('mongoose');

// Employee Schema
let WeatherSchema = mongoose.Schema({
	id:{
		type : String
	},
	location : {
		type : String
	},
	temp : {
		type : String
	},
	low : {
		type : String
	},
	high : {
		type : String
	},
	feel : {
		type : String
	},
	realFeel : {
		type : String
	},
	chanceRain : {
		type : String
	},
	windSpeed : {
		type : String
	}
});
module.exports = mongoose.model('Weather',WeatherSchema);
