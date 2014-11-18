var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var CarsData = connection.sequelize.define('CarsData', {
    make: Sequelize.STRING,
    model: Sequelize.STRING,
    body: Sequelize.STRING,
    gen: Sequelize.STRING,
    prody: Sequelize.STRING,
    doors: Sequelize.INTEGER,
    cap: Sequelize.INTEGER,
    power: Sequelize.STRING,
});

exports.CarsData = CarsData;

//FOREIGN KEYS
var CarOffer = require('./caroffer.js').CarOffers;
CarsData.hasMany(CarOffer)
var Engine = require('./engine.js').Engines;
CarsData.belongsTo(Engine)
var GearT = require('./geart.js').GearTs;
CarsData.belongsTo(GearT)