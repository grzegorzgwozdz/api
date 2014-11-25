var payment = require('../models/payment.js')
var Sequelize = require('sequelize');

exports.getPayments = function (req, res) {
    payment.Payments.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};
exports.postPayment = function (req, res) {
    payment.Payments.build({
        Price: req.body.Price,
        Negotiable: req.body.Negotiable,
        Credit: req.body.Credit,
        Leasing: req.body.Leasing
    }).save()
    .then(function (data) {
            console.log(req.body)
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        })
};
exports.putPayment = function (req, res) {
    payment.Payments.update(
        {
            Price: req.body.Price,
            Negotiable: req.body.Negotiable,
            Credit: req.body.Credit,
            Leasing: req.body.Leasing
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

exports.getSyncPayments = function (req, res) {
    payment.Payments.findAll({
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