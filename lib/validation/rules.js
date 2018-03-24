const { query, param, body,check, validationResult } = require('express-validator/check');
module.exports.createUser =  [
    query('fName').exists().withMessage('must be exist'),
    query('lName').exists().withMessage('must be exist'),
];