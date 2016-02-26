<<<<<<< HEAD

// var categories = require('./../models/categories.js');

// module.exports = {

=======
<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var categories = require('./../models/categories.js');

// module.exports = {
    
>>>>>>> master
//     /** C */
//     createCategory: function (req, res) {
//         categories.create(req.body).exec(function (err, createCategory) {
//             if (err) { console.error(err); return res.status(500).json(err); }
//             else { res.status(200).json('Category Added!', createCategory); }
//         })
//     },
<<<<<<< HEAD

=======
    
>>>>>>> master
//     /** R */
//     readCategory: function (req, res) {
//         categories.find(req.query).populate('cards').exec(function (err, readCategory) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Category Data Retrieved!', readCategory); }
//         })
//     },
<<<<<<< HEAD

=======
        
>>>>>>> master
//     /** U */
//     updateCategory: function (req, res) {
//         categories.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCategory) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Category Updated!', updateCategory); }
//         })
<<<<<<< HEAD
//     },

=======
//     }, 
    
>>>>>>> master
//     /** D */
//     deleteCategory: function (req, res) {
//         categories.findByIdAndRemove(req.query.id, function (err, deleteCategory) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Category Deleted!', deleteCategory); }
//         })
//     },
// };
<<<<<<< HEAD
var categories = require('./../models/categories.js');

module.exports = {

=======
=======
var categories = require('./../models/categories.js');

module.exports = {
    
>>>>>>> master
    /** C */
    createCategory: function (req, res) {
        categories.create(req.body).exec(function (err, createCategory) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Category Added!', createCategory); }
        })
    },
<<<<<<< HEAD

=======
    
>>>>>>> master
    /** R */
    readCategory: function (req, res) {
        categories.find(req.query).populate('cards').exec(function (err, readCategory) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Category Data Retrieved!', readCategory); }
        })
    },
<<<<<<< HEAD

=======
        
>>>>>>> master
    /** U */
    updateCategory: function (req, res) {
        categories.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCategory) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Category Updated!', updateCategory); }
        })
    }, 
<<<<<<< HEAD

=======
    
>>>>>>> master
    /** D */
    deleteCategory: function (req, res) {
        categories.findByIdAndRemove(req.query.id, function (err, deleteCategory) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Category Deleted!', deleteCategory); }
        })
    },
};
<<<<<<< HEAD
=======
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
>>>>>>> master
