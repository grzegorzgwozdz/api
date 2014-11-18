var geart = require('../models/geart.js')

exports.getGearTs = function (req, res) {
    geart.GearTs.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};