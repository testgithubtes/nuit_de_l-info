const express =require('express');
const consign = require('consign');

const app = express();

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin',"*");
	res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE");
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});
consign()
    .include("config/database.js")
    .then("libs/middlewares.js")
    .then("models")
    .then("routes/Article.js")
    .then("routes/Weather.js")
    .then("libs/boot.js")
    .into(app);
