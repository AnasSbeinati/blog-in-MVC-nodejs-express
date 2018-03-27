const User = require('../models/User.js');
const validationErrors = require('../../lib/validation/errors');
const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;


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

exports.signup = function () {

    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ email: email }, function(err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));
}