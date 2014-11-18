var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var Country = connection.sequelize.define('Country', {
    CountryName: Sequelize.STRING
});

exports.Countries = Country;
var CarCountry = require('./carcountry.js').CarCounties;
Country.hasOne(CarCountry, { foreignKey : 'fromCountry' });
Country.hasOne(CarCountry, {foreignKey : 'country'});