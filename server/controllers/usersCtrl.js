<<<<<<< edb155bcd03ab7dd7cb3c63cf21d18260907fcdf
// var users = require('./../models/users.js');

// module.exports = {
    
//     /** C */
//     createUser: function (req, res, next) {
//         users.create(req.body, function (err, createUser) {
//             if (err) { console.error(err); return res.status(500).json(err); }
//             res.status(200).json('User Created!', createUser);
//         })
//     },
    
//     /** R */
//     readUser: function (req, res, next) {
//         users.find.exec().then(function (err, readUser) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send('User Data Retrieved!', readUser); }
//         })
//     },
        
//     /** R */
//     // getCurrentUser: function (req, res, next) {
//     //     if (!req.user) res.status(401).send('');
//     //     req.user.password = null;
//     //     res.status(200).json(req.user);
//     // },
        
//     /** U */
//     updateUser: function (req, res, next) {
//         users.findByIdAndUpdate(req.params._id, req.body, function (err, updateUser) {
//             if (err) next(err);
//             res.status(200).send('User Updated!', updateUser);
//         })
//     }, 
    
//     /** D */
//     deleteUser: function (req, res, next) {
//         users.findByIdAndRemove(req.query.id, function (err, deleteUser) {
//             if (err) { res.status(500).send(err); }
//             else { res.send('User Deleted!', deleteUser); }
//         })
//     },
// };
=======
var users = require('./../models/users.js');

module.exports = {
    
    /** C */
    createUser: function (req, res, next) {
        users.create(req.body, function (err, createUser) {
            if (err) { console.error(err); return res.status(500).json(err); }
            res.status(200).json('User Created!', createUser);
        })
    },
    
    /** R */
    readUser: function (req, res, next) {
        users.find.exec().then(function (err, readUser) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('User Data Retrieved!', readUser); }
        })
    },
        
    /** R */
    // getCurrentUser: function (req, res, next) {
    //     if (!req.user) res.status(401).send('');
    //     req.user.password = null;
    //     res.status(200).json(req.user);
    // },
        
    /** U */
    updateUser: function (req, res, next) {
        users.findByIdAndUpdate(req.params._id, req.body, function (err, updateUser) {
            if (err) next(err);
            res.status(200).send('User Updated!', updateUser);
        })
    }, 
    
    /** D */
    deleteUser: function (req, res, next) {
        users.findByIdAndRemove(req.query.id, function (err, deleteUser) {
            if (err) { res.status(500).send(err); }
            else { res.send('User Deleted!', deleteUser); }
        })
    },
};
>>>>>>>  built out several directives, currently working on left Nav bar, the current listed directivesin the left nav area are placeholders, not all of them are working.
