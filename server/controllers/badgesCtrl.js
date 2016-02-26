<<<<<<< HEAD
=======
<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var badges = require('./../models/badges.js');

// module.exports = {
    
//     /** C */
//     createBadge: function (req, res) {
//         badges.create(req.body).exec(function (err, createBadge) {
//             if (err) { console.error(err); return res.status(500).json(err); }
//             else { res.status(200).json('Badge Added!', createBadge); }
//         })
//     },
    
//     /** R */
//     readBadge: function (req, res) {
//         badges.find(req.query).populate('users').exec(function (err, readBadge) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Badge Data Retrieved!', readBadge); }
//         })
//     },
        
//     /** U */
//     updateBadge: function (req, res) {
//         badges.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateBadge) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Badge Updated!', updateBadge); }
//         })
//     }, 
    
//     /** D */
//     deleteBadge: function (req, res) {
//         badges.findByIdAndRemove(req.query.id, function (err, deleteBadge) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Badge Deleted!', deleteBadge); }
//         })
//     },
// };
=======
>>>>>>> master
var badges = require('./../models/badges.js');

module.exports = {
    
    /** C */
    createBadge: function (req, res) {
        badges.create(req.body).exec(function (err, createBadge) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Badge Added!', createBadge); }
        })
    },
    
    /** R */
    readBadge: function (req, res) {
        badges.find(req.query).populate('users').exec(function (err, readBadge) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Badge Data Retrieved!', readBadge); }
        })
    },
        
    /** U */
    updateBadge: function (req, res) {
        badges.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateBadge) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Badge Updated!', updateBadge); }
        })
    }, 
    
    /** D */
    deleteBadge: function (req, res) {
        badges.findByIdAndRemove(req.query.id, function (err, deleteBadge) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Badge Deleted!', deleteBadge); }
        })
    },
<<<<<<< HEAD
};
=======
};
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
>>>>>>> master
