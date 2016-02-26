<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var badgesSchema = new Schema({
//     badgeImage: { type: String },
//     mileStone: { type: String },
//     pointValue: {
//         easy: {type: Number, default: 5 },
//         medium: {type: Number, default: 10 },
//         hard: {type: Number, default: 20 }
//     },
//     category: { type: mongoose.Schema.Type.ObjectId, ref: 'categories' }
// });

// module.exports = mongoose.model('badges', badgesSchema);
<<<<<<< HEAD
=======
=======
>>>>>>> master
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var badgesSchema = new Schema({
    badgeImage: { type: String },
    mileStone: { type: String },
    pointValue: {
        easy: {type: Number, default: 5 },
        medium: {type: Number, default: 10 },
        hard: {type: Number, default: 20 }
    },
    category: { type: mongoose.Schema.Type.ObjectId, ref: 'categories' }
});

module.exports = mongoose.model('badges', badgesSchema);
<<<<<<< HEAD
=======
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
>>>>>>> master
