<<<<<<< HEAD
=======
<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
>>>>>>> master
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var curriculumsSchema = new Schema({
//     curriculumTitle: { type: String },
//     deck: [{ type: mongoose.Schema.Type.ObjectId, ref: 'cards' }]
// });

// module.exports = mongoose.model('curriculums', curriculumsSchema);
<<<<<<< HEAD
=======
=======
>>>>>>> master
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var curriculumsSchema = new Schema({
    curriculumTitle: { type: String },
    deck: [{ type: mongoose.Schema.Type.ObjectId, ref: 'cards' }]
});

module.exports = mongoose.model('curriculums', curriculumsSchema);
<<<<<<< HEAD
=======
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
>>>>>>> master
