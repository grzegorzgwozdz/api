var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var User = connection.sequelize.define('Users', {
    Username: Sequelize.STRING,
    Password: Sequelize.STRING,
    Name: Sequelize.STRING
});

exports.Users = User;
