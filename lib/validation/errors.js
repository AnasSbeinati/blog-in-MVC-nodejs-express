const { validationResult } = require('express-validator/check');
exports.catchGeneralError = function (req) {
    const errors = validationResult(req);
    console.log(errors.isEmpty());
    if (!errors.isEmpty()) {
        return { errors: errors.mapped() };
    } else {
        return undefined;
    }
};