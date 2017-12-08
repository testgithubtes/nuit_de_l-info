let mongoose = require('mongoose');

// Employee Schema
let ArticleSchema = mongoose.Schema({
	id:{
		type : String
	},
	title : {
		type : String
	},
	photo : {
		type : String
	},
	details : {
		type : String
	},
	location : {
		type : String
	},
	category : {
		type : String
	}
});
module.exports = mongoose.model('Article',ArticleSchema);
