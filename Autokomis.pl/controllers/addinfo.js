var addinfo = require('../models/addinfo.js');
var Sequelize = require('sequelize');


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

exports.putAddInfo = function (req, res) {
    addinfo.AddInfos.update(
        {
            Description: req.body.Description,
            AddDescription: req.body.AddDescription
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

exports.getSyncAddInfo = function (req, res) {
    addinfo.AddInfos.findAll({
        where: Sequelize.or(
            { createdAt: {gte: req.params.date} },
            { updatedAt: {gte: req.params.date } }
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
