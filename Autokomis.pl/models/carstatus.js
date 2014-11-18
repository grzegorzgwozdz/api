var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var CarStatus = connection.sequelize.define('CarStatus', {
    Status: Sequelize.STRING
});

exports.CarStatuses = CarStatus;

//FOREIGN KEYS
var CarOffer = require('./caroffer.js').CarOffers;
CarStatus.hasMany(CarOffer)
