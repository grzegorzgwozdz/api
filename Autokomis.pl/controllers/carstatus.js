var carstatus = require('../models/carstatus.js')

exports.getCarStatuses = function (req, res) {
    carstatus.CarStatuses.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};