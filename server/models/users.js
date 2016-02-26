<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var usersSchema = new Schema({
//     profileImage: { type: String },
//     firstName: { type: String },
//     lastName: { type: String },
//     email: { type: String },
//     password: { type: String },
//     cohort: { type: mongoose.Schema.Types.ObjectId, ref: 'cohorts' },
//     badgesRequested: { type: [{ type: mongoose.Schema.Type.ObjectId, ref: 'badges' }], default: [] },
//     badgesAwarded: { type: [{ type: mongoose.Schema.Type.ObjectId, ref: 'badges' }], default: [] },
//     earnedPoints: { type: Number, default: 0 },
//     role: { type: [{}] }
// });

// module.exports = mongoose.model('users', usersSchema);
=======
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    profileImage: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    cohort: { type: mongoose.Schema.Types.ObjectId, ref: 'cohorts' },
    badgesRequested: { type: [{ type: mongoose.Schema.Type.ObjectId, ref: 'badges' }], default: [] },
    badgesAwarded: { type: [{ type: mongoose.Schema.Type.ObjectId, ref: 'badges' }], default: [] },
    earnedPoints: { type: Number, default: 0 },
    role: { type: [{}] }
});

module.exports = mongoose.model('users', usersSchema);
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
