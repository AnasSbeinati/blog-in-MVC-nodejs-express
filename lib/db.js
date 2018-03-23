const Sequelize = require('sequelize');
var configDB = require('../config/database.js');

exports.sequelize = new Sequelize(configDB.url); // connect to our database
exports.Sequelize = Sequelize;