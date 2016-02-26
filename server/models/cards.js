<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var cardsSchema = new Schema({
//     trophyTitle: { type: String },
//     trophyImage: { type: String },
//     badges: { type: [{ type: mongoose.Schema.Type.ObjectId, ref: 'badges' }], default: [] },
//     category: { type: mongoose.Schema.Type.ObjectId, ref: 'categories' },
//     trophyLevels: {
//         bronze: { type: Number, default: 33 },
//         silver: { type: Number, default: 66 },
//         gold: { type: Number, default: 99 }
//     }
// });

// module.exports = mongoose.model('cards', cardsSchema);
=======
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardsSchema = new Schema({
    trophyTitle: { type: String },
    trophyImage: { type: String },
    badges: { type: [{ type: mongoose.Schema.Type.ObjectId, ref: 'badges' }], default: [] },
    category: { type: mongoose.Schema.Type.ObjectId, ref: 'categories' },
    trophyLevels: {
        bronze: { type: Number, default: 33 },
        silver: { type: Number, default: 66 },
        gold: { type: Number, default: 99 }
    }
});

module.exports = mongoose.model('cards', cardsSchema);
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
