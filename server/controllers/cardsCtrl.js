<<<<<<< HEAD
=======
<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var cards = require('./../models/cards.js');

// module.exports = {
    
//     /** C */
//     createCard: function (req, res) {
//         cards.create(req.body).exec(function (err, createCard) {
//             if (err) { console.error(err); return res.status(500).json(err); }
//             else { res.status(200).json('Card Added!', createCard); }
//         })
//     },
    
//     /** R */
//     readCard: function (req, res) {
//         cards.find(req.query).populate('cards').exec(function (err, readCard) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Card Data Retrieved!', readCard); }
//         })
//     },
        
//     /** U */
//     updateCard: function (req, res) {
//         cards.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCard) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Card Updated!', updateCard); }
//         })
//     }, 
    
//     /** D */
//     deleteCard: function (req, res) {
//         cards.findByIdAndRemove(req.query.id, function (err, deleteCard) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('Card Deleted!', deleteCard); }
//         })
//     },
// };
=======
>>>>>>> master
var cards = require('./../models/cards.js');

module.exports = {
    
    /** C */
    createCard: function (req, res) {
        cards.create(req.body).exec(function (err, createCard) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Card Added!', createCard); }
        })
    },
    
    /** R */
    readCard: function (req, res) {
        cards.find(req.query).populate('cards').exec(function (err, readCard) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Card Data Retrieved!', readCard); }
        })
    },
        
    /** U */
    updateCard: function (req, res) {
        cards.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCard) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Card Updated!', updateCard); }
        })
    }, 
    
    /** D */
    deleteCard: function (req, res) {
        cards.findByIdAndRemove(req.query.id, function (err, deleteCard) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Card Deleted!', deleteCard); }
        })
    },
<<<<<<< HEAD
};
=======
};
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
>>>>>>> master
