﻿var express = require('express'),
    bodyParser = require('body-parser');

var addinfoController = require('../controllers/addinfo.js');
var carconditionController = require('../controllers/carcondition.js');
var carcountryController = require('../controllers/carcountry.js');
var cardataController = require('../controllers/cardata.js');
var carofferController = require('../controllers/caroffer.js');
var carstatusController = require('../controllers/carstatus.js');
var countriesController = require('../controllers/country.js');
var engineController = require('../controllers/engine.js');
var geartController = require('../controllers/geart.js');
var paymentController = require('../controllers/payment.js');
var pictureController = require('../controllers/picture.js');
var picturegalleriesController = require('../controllers/picturegalleries.js');
var userController = require('../controllers/user.js');

var app = express();
app.use(bodyParser.urlencoded({
        extended: true
    }));
var router = express.Router();

router.route('/').get(function (req, res) {
    res.send('dokumentacja api');
});

router.route('/addinfo')
    .get(addinfoController.getAddInfos)
    .post(addinfoController.postAddInfo);
router.route('/carcondition')
    .get(carconditionController.getCarConditions);
router.route('/carcountry')
    .get(carcountryController.getCarCountries)
    .post(carcountryController.postCarCountries);
router.route('/cardata')
    .get(cardataController.getCarsData);
router.route('/caroffer')
    .get(carofferController.getCarOffers)
    .post(carofferController.postCarOffer);
router.route('/carstatus')
    .get(carstatusController.getCarStatuses);
router.route('/country')
    .get(countriesController.getCountries);
router.route('/engine')
    .get(engineController.getEngines);
router.route('/geart')
    .get(geartController.getGearTs);
router.route('/payment')
    .get(paymentController.getPayments)
    .post(paymentController.postPayment);
router.route('/picture')
    .get(pictureController.getPictures)
    .post(pictureController.postPicture);
router.route('/picturegallery')
    .get(picturegalleriesController.getGalleries)
    .post(picturegalleriesController.postGallery);
router.route('/user')
    .get(userController.getUsers)
    .post(userController.postUser);

router.route('/addinfo/:Id')
    .put(addinfoController.putAddInfo)
router.route('/carcountry/:Id')
    .put(carcountryController.putCarCountry)
router.route('/caroffer/:Id')
    .put(carofferController.putCarOffer)
router.route('/payment/:Id')
    .put(paymentController.putPayment)
router.route('/picture/:Id')
    .put(pictureController.putPicture)
router.route('/picturegallery/:Id')
    .put(picturegalleriesController.putPictureGallery)

router.route('/addinfo/sync/:date')
    .get(addinfoController.getSyncAddInfo)
router.route('/carcountry/sync/:date')
    .get(carcountryController.getSyncCarCountry)
router.route('/caroffer/sync/:date')
    .get(carofferController.getSyncCarOffers)
router.route('/payment/sync/:date')
    .get(paymentController.getSyncPayments)
router.route('/picture/sync/:date')
    .get(pictureController.getSyncPictures)
router.route('/picturegallery/sync/:date')
    .get(picturegalleriesController.getSyncPictureGalleries)

module.exports = router;