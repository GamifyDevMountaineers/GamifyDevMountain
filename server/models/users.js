var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    image: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    cohort: { type: String },
    role: { type: String }
});

module.exports = mongoose.model('users', usersSchema);