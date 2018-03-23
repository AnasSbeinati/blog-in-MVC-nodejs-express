const User = require('../models/User.js');

exports.createUser = function(req, res) {
    User.create(req, res);
    res.send('created');
};