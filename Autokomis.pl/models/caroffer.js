var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var CarOffer = connection.sequelize.define('CarOffers', {
    Mileage: Sequelize.INTEGER,
    ProdYear: Sequelize.INTEGER,
    VIN: Sequelize.STRING(15)
});

exports.CarOffers = CarOffer;

//FOREIGN KEYS
var AddInfo = require('./addinfo.js').AddInfos;
CarOffer.belongsTo(AddInfo);
var CarCondition = require('./carcondition.js').CarConditions;
CarOffer.belongsTo(CarCondition);
var CarCountry = require('./carcountry.js').CarCounties;
CarOffer.belongsTo(CarCountry);
var CarsData = require('./cardata.js').CarsData;
CarOffer.belongsTo(CarsData);
var CarStatus = require('./carstatus.js').CarStatuses;
CarOffer.belongsTo(CarStatus)
var Payment = require('./payment.js').Payments;
CarOffer.belongsTo(Payment)