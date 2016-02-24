var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
    categoryTitle: { type: String }
});

module.exports = mongoose.model('categories', categoriesSchema);