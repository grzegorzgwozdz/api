var addinfo = require('../models/addinfo.js')

exports.getAddInfos = function (req, res) {
    addinfo.AddInfos.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};

exports.postAddInfo = function (req, res) {
    addinfo.AddInfos.build({
        Description: req.body.Description,
        AddDescription: req.body.AddDescription
    }).save()
    .then(function (data) {
        console.log(req.body)
        res.json(data);
    }).catch(function (err) {
        res.json(err);
})};
