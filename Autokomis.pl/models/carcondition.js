var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var CarCondition = connection.sequelize.define('CarCondition', {
    Condition: Sequelize.STRING
});

exports.CarConditions = CarCondition;

var CarOffer = require('./caroffer.js').CarOffers;
CarCondition.hasMany(CarOffer)
