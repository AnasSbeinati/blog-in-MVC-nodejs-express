const User = require('../models/User.js');
const validationErrors = require('../../lib/validation/errors');

exports.createUser = function (req, res) {
    const errors = validationErrors.catchGeneralError(req);
    if(errors) {
       return res.status(422).json(errors);
    }
    User.create({firstName: req.query.fName, lastName: req.query.lName})
        .then(function (user) {
            res.send(user);
        });
};