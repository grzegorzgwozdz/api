var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var Payment = connection.sequelize.define('Payment', {
    Price: Sequelize.INTEGER,
    Negotiable: Sequelize.BOOLEAN,
    Credit: Sequelize.BOOLEAN,
    Leasing: Sequelize.BOOLEAN,
});

exports.Payments = Payment;

//FOREIGN KEYS
var CarOffer = require('./caroffer.js').CarOffers;
Payment.hasOne(CarOffer)
