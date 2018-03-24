const db = require('../../lib/db');
sequelize = db.sequelize;
Sequelize = db.Sequelize;

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});


module.exports = User;