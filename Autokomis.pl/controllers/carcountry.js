var carcountry = require('../models/carcountry.js')

exports.getCarCountries = function (req, res) {
    carcountry.CarCounties.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};
exports.postCarCountries = function (req, res) {
    carcountry.CarCounties.build({
        fromCountry: req.body.fromCountry,
        Country: req.body.Country
    }).save()
    .then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        })
};
