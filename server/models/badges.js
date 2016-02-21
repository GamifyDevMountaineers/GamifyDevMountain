var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var badgesSchema = new Schema({
    badgeImage: { type: String },
    mileStone: { type: String },
    difficulty: { type: String },
    categoryId: { type: String }
});

module.exports = mongoose.model('badges', badgesSchema);