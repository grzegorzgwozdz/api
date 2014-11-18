var carcondition = require('../models/carcondition.js')

exports.getCarConditions = function (req, res) {
    carcondition.CarConditions.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};