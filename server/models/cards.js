var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardsSchema = new Schema({
    title: { type: String },
    Image: { type: String },
    badges: [],
    categoryId: {}
});

module.exports = mongoose.model('cards', cardsSchema);