﻿var payment = require('../models/payment.js')

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
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        })
};