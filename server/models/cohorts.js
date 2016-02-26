<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var cohortsSchema = new Schema({
//     cohortName: { type: String },
//     cohortId: { type: Number },
//     cohortLocation: { type: String },
//     cohortCurriculum: { type: mongoose.Schema.Type.ObjectId, ref: 'curriculums' }
// });

// module.exports = mongoose.model('cohorts', cohortsSchema);
=======
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cohortsSchema = new Schema({
    cohortName: { type: String },
    cohortId: { type: Number },
    cohortLocation: { type: String },
    cohortCurriculum: { type: mongoose.Schema.Type.ObjectId, ref: 'curriculums' }
});

module.exports = mongoose.model('cohorts', cohortsSchema);
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
