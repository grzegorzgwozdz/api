var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var GearT = connection.sequelize.define('GearT', {
    GearTName: Sequelize.STRING
});

exports.GearTs = GearT;

//FOREIGN KEYS
var CarData = require('./cardata.js').CarsData;
GearT.hasMany(CarData)

