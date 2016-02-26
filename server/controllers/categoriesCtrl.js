<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var categories = require('./../models/categories.js');

// module.exports = {
    
//     /** C */
//     createCategory: function (req, res) {
//         categories.create(req.body).exec(function (err, createCategory) {
//             if (err) { console.error(err); return res.status(500).json(err); }
//             else { res.status(200).json('Category Added!', createCategory); }
//         })
//     },
    
//     /** R */
//     readCategory: function (req, res) {
//         categories.find(req.query).populate('cards').exec(function (err, readCategory) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Category Data Retrieved!', readCategory); }
//         })
//     },
        
//     /** U */
//     updateCategory: function (req, res) {
//         categories.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCategory) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Category Updated!', updateCategory); }
//         })
//     }, 
    
//     /** D */
//     deleteCategory: function (req, res) {
//         categories.findByIdAndRemove(req.query.id, function (err, deleteCategory) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Category Deleted!', deleteCategory); }
//         })
//     },
// };
=======
var categories = require('./../models/categories.js');

module.exports = {
    
    /** C */
    createCategory: function (req, res) {
        categories.create(req.body).exec(function (err, createCategory) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Category Added!', createCategory); }
        })
    },
    
    /** R */
    readCategory: function (req, res) {
        categories.find(req.query).populate('cards').exec(function (err, readCategory) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Category Data Retrieved!', readCategory); }
        })
    },
        
    /** U */
    updateCategory: function (req, res) {
        categories.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCategory) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Category Updated!', updateCategory); }
        })
    }, 
    
    /** D */
    deleteCategory: function (req, res) {
        categories.findByIdAndRemove(req.query.id, function (err, deleteCategory) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Category Deleted!', deleteCategory); }
        })
    },
};
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
