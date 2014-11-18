var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var CarCountry = connection.sequelize.define('CarCountry', {
});

exports.CarCounties = CarCountry;

//FOREIGN KEYS
var CarOffer = require('./caroffer.js').CarOffers;
CarCountry.hasOne(CarOffer);
