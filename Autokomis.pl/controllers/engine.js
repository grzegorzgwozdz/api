var engine = require('../models/engine.js')

exports.getEngines = function (req, res) {
    engine.Engines.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};