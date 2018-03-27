const db = require('../../lib/db');
let bcrypt = require('bcrypt-nodejs');
sequelize = db.sequelize;
Sequelize = db.Sequelize;

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

//methods ======================
//generating a hash
User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if password is valid
User.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = User;