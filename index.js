const express = require('express');

//setup express app
const app = express();

//body-parser makes data available to the req object
const bodyParser = require('body-parser');

//set-up mongodb using mongoose
const mongoose = require('mongoose');

//connect to mongodb database
//run mongodb database locally to connect to localhost or can also use dbaas Mlab
mongoose.connect('mongodb://localhost:27017/movies');

//using es6 promise
mongoose.Promise = global.Promise;

//setting up routes
const routes = require('./routes/api')


// listen for request
// can also use process.env.port from (.env) envirnoment file to set the port number
app.listen(4000,function(){
    console.log('now listening for requests');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',routes);

//error handling
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});