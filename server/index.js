// import requirements
var express = require( 'express' );
var cors = require( 'cors' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );

// Controllers
var usersCtrl = require( './controllers/usersCtrl' );

//initialize app
var app = express();

//initialize dependencies
app.use( cors() );
app.use( bodyParser.json() );
app.use( express.static( __dirname + './../public' ) );
 // NOTE: hosting this static page for us Locally through Nodemon.

//endpoints:
// users
app.post( '/users', usersCtrl.create );
app.put( '/users/:id', usersCtrl.update );
app.delete( '/users/:id', usersCtrl.delete );
app.get( '/users', usersCtrl.read );


//routing Variables
var port = 3000;
var mongoURI = 'mongodb://localhost:27017/GamifyDevMountain';

//mongoDB connection
mongoose.set( 'debug', true );
mongoose.connect( mongoURI );
mongoose.connection.once( 'open', function () {
  console.log( 'Connected to mongo at: ', mongoURI );
} )

// app listen
app.listen( port, function () {
  console.log( 'listening on port ', port );
} );
