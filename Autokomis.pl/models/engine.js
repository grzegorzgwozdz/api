var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var Engine = connection.sequelize.define('Engine', {
    EngineName: Sequelize.STRING
});

exports.Engines = Engine;

//FOREIGN KEYS
var CarData = require('./cardata.js').CarsData;
Engine.hasMany(CarData)


