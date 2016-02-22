var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var badgesSchema = new Schema({
    badgeImage: { type: String },
    mileStone: { type: String },
    pointValue: {
        easy: {type: Number, default: 5 },
        medium: {type: Number, default: 10 },
        hard: {type: Number, default: 15 }
    },
    category: { type: mongoose.Schema.Type.ObjectId, ref: 'categories' }
});

module.exports = mongoose.model('badges', badgesSchema);