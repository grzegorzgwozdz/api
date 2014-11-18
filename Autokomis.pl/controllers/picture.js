var picture = require('../models/picture.js')

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