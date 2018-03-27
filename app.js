let express = require('express');

let app = express();
let multer = require('multer')
let constants = require('constants');
let constant = require('./config/constants');


let port = process.env.PORT || 8042;

let passport = require('passport');
let flash = require('connect-flash');
let path = require('path');

let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let bodyParser = require('body-parser');
let dateFormat = require('dateformat');
let now = new Date();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/***************DB configuratrion********************/

//configuration ===============================================================

require('./config/passport')(passport); // pass passport for configuration

//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
//app.use(bodyParser()); // get information from html forms

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
//app.set('view engine', 'ejs'); // set up ejs for templating

//required for passport
//app.use(session({ secret: 'iloveyoudear...' })); // session secret

app.use(session({
    secret: 'I Love India...',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./config/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
app.use(function(err, req, res, next){
    res.status(400).json(err);
});
//catch 404 and forward to error handler
app.use(function (req, res, next) {
    // specific for validation errors
    res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo});
});
exports = module.exports = app;