//
// /** Dependants */
// var express = require('express');
// var bodyParser = require('body-parser');
// var session = require('express-session');
// var mongoose = require('mongoose');
// var cors = require('cors');
//
// /* Controllers */
// var usersCtrl = require('./controllers/usersCtrl');
//


// /** Dependants */
// var express = require('express');
// var bodyParser = require('body-parser');
// var session = require('express-session');
// var mongoose = require('mongoose');
// var cors = require('cors');

// /* Controllers */
// var usersCtrl = require('./controllers/usersCtrl');

// /** Services */
// // var passport = require('./server/services/passport');

// /** Config */
// var config = require('./config');

// /** Policies */
// var isAuthed = function (req, res, next) {
//     if (!req.isAuthenticated()) return res.status(401).send();
//     return next();
//     console.log('Function: isAuthed');
// };

// /** Express */
// var app = express();

// /** Application */
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());
// app.use(cors());
// app.use(session({ secret: config.SESSION_SECRET }));
// app.use(passport.initialize());
// app.use(passport.session());

// /** Log In */
// app.post('/api/login', function (req, res, next) {
//     console.log('Running Function: login');
//     next();
// },
//     passport.authenticate('local'), function (req, res) {
//         res.send(req.user._id);
//         console.log('Function: authenticate');
//     });

// /** Log Out */
// app.get('/api/logout', function (req, res, next) {
//     req.logout();
//     return res.redirect('/#/main');
//     console.log('Running Function: logout');
// });

// /* User End Points */
// app.post('/users', usersCtrl.createUser);
// app.get('/users', usersCtrl.getUser);
// app.put('/users/:id', usersCtrl.updateUser);
// app.delete('/users/:id', usersCtrl.deleteUser);

// /* Curriculum End Points */
// app.post('/curriculums', usersCtrl.createCurriculum);
// app.get('/curriculums', usersCtrl.getCurriculum);
// app.put('/curriculums/:id', usersCtrl.updateCurriculum);
// app.delete('/curriculums/:id', usersCtrl.deleteCurriculum);

// /* Cohorts End Points */
// app.post('/cohorts', usersCtrl.createCohort);
// app.get('/cohorts', usersCtrl.getCohort);
// app.put('/cohorts/:id', usersCtrl.updateCohort);
// app.delete('/cohorts/:id', usersCtrl.deleteCohort);

// /* Cards End Points */
// app.post('/cards', usersCtrl.createCards);
// app.get('/cards', usersCtrl.getCards);
// app.put('/cards/:id', usersCtrl.updateCards);
// app.delete('/cards/:id', usersCtrl.deleteCards);

// /* Badges End Points */
// app.post('/badges', usersCtrl.createBadges);
// app.get('/badges', usersCtrl.getBadges);
// app.put('/badges/:id', usersCtrl.updateBadges);
// app.delete('/badges/:id', usersCtrl.deleteBadges);

// /** Connections */
// var nodePort = 3000;
// app.listen(nodePort, function () {
//     console.log('Running nodemon://localhost:' + nodePort);
// });

// var mongoURI = 'mongodb://localhost:27017/eCommerce'
// mongoose.connect(mongoURI);
// mongoose.connection.once('open', function (err) {
//     if (err) { throw err; }
//     else { console.log('Running ' + mongoURI); }
// });

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

/* Curriculum End Points */
app.post('/curriculums', usersCtrl.createCurriculum);
app.get('/curriculums', usersCtrl.getCurriculum);
app.put('/curriculums/:id', usersCtrl.updateCurriculum);
app.delete('/curriculums/:id', usersCtrl.deleteCurriculum);

/* Cohorts End Points */
app.post('/cohorts', usersCtrl.createCohort);
app.get('/cohorts', usersCtrl.getCohort);
app.put('/cohorts/:id', usersCtrl.updateCohort);
app.delete('/cohorts/:id', usersCtrl.deleteCohort);

/* Cards End Points */
app.post('/cards', usersCtrl.createCards);
app.get('/cards', usersCtrl.getCards);
app.put('/cards/:id', usersCtrl.updateCards);
app.delete('/cards/:id', usersCtrl.deleteCards);

/* Badges End Points */
app.post('/badges', usersCtrl.createBadges);
app.get('/badges', usersCtrl.getBadges);
app.put('/badges/:id', usersCtrl.updateBadges);
app.delete('/badges/:id', usersCtrl.deleteBadges);

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
