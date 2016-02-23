/** Dependants */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

/* Controllers */
var usersCtrl = require('./controllers/usersCtrl');

/** Services */
// var passport = require('./server/services/passport');

/** Config */
var config = require('./config');

/** Policies */
var isAuthed = function (req, res, next) {
    if (!req.isAuthenticated()) return res.status(401).send();
    return next();
    console.log('Function: isAuthed');
};

/** Express */
var app = express();

/** Application */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: config.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

/* User End Points */
app.post('/users', usersCtrl.createUser);
app.get('/users', usersCtrl.getUser);
app.put('/users/:id', usersCtrl.updateUser);
app.delete('/users/:id', usersCtrl.deleteUser);


/** Connections */
var nodePort = 3000;
app.listen(nodePort, function () {
    console.log('Running nodemon://localhost:' + nodePort);
});

var mongoURI = 'mongodb://localhost:27017/eCommerce'
mongoose.connect(mongoURI);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log('Running ' + mongoURI); }
});
