var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var AddInfo = connection.sequelize.define('AddInfo', {
    Description: Sequelize.STRING,
    AddDescription: Sequelize.STRING
});

exports.AddInfos = AddInfo;

//FOREIGN KEYS
var CarOffer = require('./caroffer.js').CarOffers;
AddInfo.hasOne(CarOffer);