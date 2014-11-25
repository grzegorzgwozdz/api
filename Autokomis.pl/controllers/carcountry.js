var carcountry = require('../models/carcountry.js')
var Sequelize = require('sequelize');

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
        country: req.body.country
    }).save()
    .then(function (data) {
            console.log(req.body)
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        })
};

exports.putCarCountry = function (req, res) {
    carcountry.CarCounties.update(
        {
            fromCountry: req.body.fromCountry,
            country: req.body.country
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

exports.getSyncCarCountry = function (req, res) {
    carcountry.CarCounties.findAll({
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