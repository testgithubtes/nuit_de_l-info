const mongoose = require('mongoose');
module.exports =app =>{

	mongoose.Promise = global.Promise;

//Connect to Mongoose
//Connection db using mongoose
//Connection db using mongoose
mongoose.connect('mongodb://user:user@ds135156.mlab.com:35156/nuit_info', {
	useMongoClient: true,
	/* other options */
  });
let db = mongoose.connection;

//Check connection
db.once('open',() => {
	console.log('Connected to MongoDB');
}).catch((err)=> console.log(err));

//Check for db errors
db.on('error',(err) =>{
	console.log('error connect');
});

}
