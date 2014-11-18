var env = "dev2";
var config = require('./database.json')[env];

var Sequelize = require('sequelize')
  , sequelize = new Sequelize(
        config.database, 
        config.user, 
        config.password, 
        {
            host: config.host,
            dialect: config.driver,
            port: config.port,
        });

exports.sequelize = sequelize;

var addinfo = require('../models/addinfo.js');
var carcondition = require('../models/carcondition.js');
var carcountry = require('../models/carcountry.js');
var cardata = require('../models/cardata.js');
var caroffer = require('../models/caroffer.js');
var carstatus = require('../models/carstatus.js');
var country = require('../models/country.js');
var engine = require('../models/engine.js');
var geart = require('../models/geart.js');
var payment = require('../models/payment.js');
var picturegalleries = require('../models/picturegalleries.js');
var user = require('../models/user.js');

sequelize
  .authenticate()
  .complete(function (err) {
        if (!!err) {
            console.log('Unable to connect to the database:', err)
        } else {
            console.log('Connection has been established successfully.')
        }
    });

sequelize
  .sync({ force: false })
  .complete(function (err) {
        if (!!err) {
            console.log('An error occurred while creating the table:', err)
        } else {
            console.log('It worked!')
        }
    });