var picture = require('../models/picture.js')
var Sequelize = require('sequelize');

exports.getPictures = function (req, res) {
    picture.Pictures.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};
exports.postPicture = function (req, res) {
    picture.Pictures.build({
        Picture: req.body.Picture,
        PictureGalleryId: req.body.PictureGalleryId
    }).save()
    .then(function (data) {
            res.json(data);
            console.log(JSON.stringify(req.body))
        }).catch(function (err) {
            res.json(err);
        })
};

exports.putPicture = function (req, res) {
    picture.Pictures.update(
        {
            Picture: req.body.Picture,
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

exports.getSyncPictures = function (req, res) {
    picture.Pictures.findAll({
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