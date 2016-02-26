<<<<<<< HEAD
=======
<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var cohorts = require('./../models/cohorts.js');

// module.exports = {
    
//     /** C */
//     createCohort: function (req, res) {
//         cohorts.create(req.body).exec(function (err, createCohort) {
//             if (err) { console.error(err); return res.status(500).json(err); }
//             else { res.status(200).json('Cohort Added!', createCohort); }
//         })
//     },
    
//     /** R */
//     readCohort: function (req, res) {
//         cohorts.find(req.query).populate('cards').exec(function (err, readCohort) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Cohort Data Retrieved!', readCohort); }
//         })
//     },
        
//     /** U */
//     updateCohort: function (req, res) {
//         cohorts.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCohort) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Cohort Updated!', updateCohort); }
//         })
//     }, 
    
//     /** D */
//     deleteCohort: function (req, res) {
//         cohorts.findByIdAndRemove(req.query.id, function (err, deleteCohort) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Cohort Deleted!', deleteCohort); }
//         })
//     },
// };
=======
>>>>>>> master
var cohorts = require('./../models/cohorts.js');

module.exports = {
    
    /** C */
    createCohort: function (req, res) {
        cohorts.create(req.body).exec(function (err, createCohort) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Cohort Added!', createCohort); }
        })
    },
    
    /** R */
    readCohort: function (req, res) {
        cohorts.find(req.query).populate('cards').exec(function (err, readCohort) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Cohort Data Retrieved!', readCohort); }
        })
    },
        
    /** U */
    updateCohort: function (req, res) {
        cohorts.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCohort) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Cohort Updated!', updateCohort); }
        })
    }, 
    
    /** D */
    deleteCohort: function (req, res) {
        cohorts.findByIdAndRemove(req.query.id, function (err, deleteCohort) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Cohort Deleted!', deleteCohort); }
        })
    },
<<<<<<< HEAD
};
=======
};
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
>>>>>>> master
