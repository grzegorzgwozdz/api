var gallery = require('../models/picturegalleries.js')

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