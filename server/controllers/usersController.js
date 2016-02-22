var users = require('./../models/users.js');

module.exports = {
    /** C */
    register: function (req, res, next) {
        users.create(req.body, function (err, registerUser) {
                if (err) { console.error(err); return res.status(500).json(err); }
                res.status(200).json(registerUser);
            })
    },
    
    /** R */
    getUserData: function (req, res, next) {
        users.find.exec().then(function (err, readUser) {
                if (err) { res.status(500).send(err); }
                else { res.status(200).send(readUser); }
            })
    },
    
    /** R */
    getCurrentUser: function (req, res, next) {
        if (!req.user) res.status(401).send('Current User is Undefined');
        req.user.password = null;
        res.status(200).json(req.user);
    },
        
    /** U */
    updateUser: function (req, res, next) {
        users.findByIdAndUpdate(req.params._id, req.body, function (err, result) {
                if (err) next(err);
                res.status(200).send('User Updated!');
            })
    }, 
    
    /** D */
    deleteUser: function (req, res, next) {
        users.findByIdAndRemove(req.query.id, function (err, deleteUser) {
                if (err) { res.status(500).send(err); }
                else { res.send(deleteUser); }
            })
    },
};