var country = require('../models/country.js')

exports.getCountries = function (req, res) {
    country.Countries.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};