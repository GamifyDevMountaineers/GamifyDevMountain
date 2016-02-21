var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
    title: { type: String }
});

module.exports = mongoose.model('categories', categoriesSchema);