var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    profileImage: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    cohort: { type: mongoose.Schema.Types.ObjectId, ref: 'cohorts'  },
    role: { type: [{}] }
});

module.exports = mongoose.model('users', usersSchema);