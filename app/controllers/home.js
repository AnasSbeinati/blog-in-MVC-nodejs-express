let numeral = require('numeral');
let bcrypt = require('bcrypt-nodejs');
let dateFormat = require('dateformat');
let passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User.js');

exports.loggedIn = function(req, res, next)
{
	next();
	if (req.session.user) { // req.session.passport._id

		next();

	} else {

		res.redirect('/login');

	}

};

exports.home = function(req, res) {
	
	
	res.render('home.ejs', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
	
	 });
	 
}


exports.signup = function(req, res) {

	if (req.session.user) {

		res.redirect('/home');

	} else {

		res.render('signup', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});
	}

};

exports.storeSignUp = function(req, res) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ email: username }, function(err, user) {
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
};

exports.login = function(req, res) {


	
	if (req.session.user) {

		res.redirect('/home');

	} else {

		res.render('login', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});

	}
	
}


    
