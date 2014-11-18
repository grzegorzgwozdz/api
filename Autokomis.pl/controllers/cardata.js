var cardata = require('../models/cardata.js')

exports.getCarsData = function (req, res) {
    cardata.CarsData.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};