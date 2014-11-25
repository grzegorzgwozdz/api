var connection = require('../controllers/database.js')
var Sequelize = require('sequelize')

var PictureGallery = connection.sequelize.define('PictureGallery', {
    PictureGalleryName: Sequelize.STRING
});

exports.PictureGalleries = PictureGallery;

//FOREIGN KEYS
var Picture = require('./picture.js').Pictures;
Picture.belongsTo(PictureGallery);
var CarOffer = require('./caroffer.js').CarOffers;
PictureGallery.hasOne(CarOffer);