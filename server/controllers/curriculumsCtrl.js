// var curriculums = require('./../models/curriculums.js');

// module.exports = {

//     /** C */
//     createCurriculum: function (req, res) {
//         curriculums.create(req.body).exec(function (err, createCurriculum) {
//             if (err) { console.error(err); return res.status(500).json(err); }
//             else { res.status(200).json('Curriculum Added!', createCurriculum); }
//         })
//     },

//     /** R */
//     readCurriculum: function (req, res) {
//         curriculums.find(req.query).populate('cards').exec(function (err, readCurriculum) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Curriculum Data Retrieved!', readCurriculum); }
//         })
//     },

//     /** U */
//     updateCurriculum: function (req, res) {
//         curriculums.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCurriculum) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Curriculum Updated!', updateCurriculum); }
//         })
//     },

//     /** D */
//     deleteCurriculum: function (req, res) {
//         curriculums.findByIdAndRemove(req.query.id, function (err, deleteCurriculum) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Curriculum Deleted!', deleteCurriculum); }
//         })
//     },
// };
var curriculums = require('./../models/curriculums.js');

module.exports = {

    /** C */
    createCurriculum: function (req, res) {
        curriculums.create(req.body).exec(function (err, createCurriculum) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Curriculum Added!', createCurriculum); }
        })
    },

    /** R */
    readCurriculum: function (req, res) {
        curriculums.find(req.query).populate('cards').exec(function (err, readCurriculum) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Curriculum Data Retrieved!', readCurriculum); }
        })
    },

    /** U */
    updateCurriculum: function (req, res) {
        curriculums.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCurriculum) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Curriculum Updated!', updateCurriculum); }
        })
    },

    /** D */
    deleteCurriculum: function (req, res) {
        curriculums.findByIdAndRemove(req.query.id, function (err, deleteCurriculum) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Curriculum Deleted!', deleteCurriculum); }
        })
    },
};
