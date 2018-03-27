let home = require('../app/controllers/home');
const passport = require('passport');
const userController = require('../app/controllers/UserController');
const validationRules = require('../lib/validation/rules');
const { check, validationResult } = require('express-validator/check');
//you can include all your controllers

module.exports = function (app) {

    app.get('/login', home.login);
    app.get('/signup', home.signup);
    //
    app.get('/', home.loggedIn, home.home);//home
    app.get('/home', home.loggedIn, home.home);//home
    //
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // // process the login form
    // app.post('/l ogin', passport.authenticate('local-login', {
    //     successRedirect: '/home', // redirect to the secure profile section
    //     failureRedirect: '/login', // redirect back to the signup page if there is an error
    //     failureFlash: true // allow flash messages
    // }));
    app.get('/create-user', validationRules.createUser, userController.createUser);

};
