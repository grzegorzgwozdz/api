var caroffer = require('../models/caroffer.js')
var Sequelize = require('sequelize');

exports.getCarOffers = function (req, res) {
    caroffer.CarOffers.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};
exports.postCarOffer = function (req, res) {
    caroffer.CarOffers.build({
        Mileage: req.body.Mileage,
        ProdYear: req.body.ProdYear,
        VIN: req.body.VIN,
        AddInfoId: req.body.AddInfoId,
        CarConditionId: req.body.CarConditionId,
        CarCountryId: req.body.CarCountryId,
        CarsDatumId: req.body.CarsDataId,
        CarStatusId: req.body.CarStatusId,
        PaymentId: req.body.PaymentId,
        PictureGalleryId: req.body.PictureGalleryId
    }).save()
    .then(function (data) {
            console.log(req.body)
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        })
};

exports.putCarOffer = function (req, res) {
    caroffer.CarOffers.update(
        {
            Mileage: req.body.Mileage,
            ProdYear: req.body.ProdYear,
            VIN: req.body.VIN
        },
        {
            where: { id : req.params.Id }
        })
        .success(function (data) {
            console.log(req.body)
            res.json(data);
        })
        .error(function (err) {
            console.log(err);
        });
};

exports.getSyncCarOffers = function (req, res) {
    caroffer.CarOffers.findAll({
        where: Sequelize.or(
            { createdAt: { gte: req.params.date } },
            { updatedAt: { gte: req.params.date } }
        )
    })
    .success(function (data) {
            console.log(req.body)
            res.json(data)
        })
    .error(function (err) {
            console.log(err)
            res.json(err)
        })
};
