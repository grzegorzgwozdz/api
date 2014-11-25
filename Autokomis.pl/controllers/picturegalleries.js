var gallery = require('../models/picturegalleries.js')
var Sequelize = require('sequelize');

exports.getGalleries = function (req, res) {
    gallery.PictureGalleries.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};
exports.postGallery = function (req, res) {
    gallery.PictureGalleries.build({
        PictureGalleryName: req.body.PictureGalleryName
    }).save()
    .then(function (data) {
            res.json(data);
            console.log(data.body)
        }).catch(function (err) {
            res.json(err);
        })
};

exports.putPictureGallery = function (req, res) {
    gallery.PictureGalleries.update(
        {
            PictureGalleryName: req.body.PictureGalleryName
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

exports.getSyncPictureGalleries = function (req, res) {
    gallery.PictureGalleries.findAll({
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