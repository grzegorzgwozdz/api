var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var Picture = connection.sequelize.define('Picture', {
    Picture: Sequelize.STRING,
});

exports.Pictures = Picture;

//FOREIGN KEYS
var PictureGallery = require('./picturegalleries.js').PictureGalleries;
PictureGallery.hasMany(Picture)
