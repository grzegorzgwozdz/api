var caroffer = require('../models/caroffer.js')

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
        CarCountry: req.body.CarCountryId,
        CarsDatumId: req.body.CarsDataId,
        CarStatusId: req.body.CarStatusId,
        PaymentId: req.body.PaymentId
    }).save()
    .then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        })
};