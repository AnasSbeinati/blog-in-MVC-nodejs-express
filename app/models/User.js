sequelize = require('../../lib/db').sequelize;
Sequelize = require('../../lib/db').Sequelize;

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});


module.exports.create = function (req, res) {
    User.create({ firstName: 'fnord', lastName: 'omnomnom' });
};