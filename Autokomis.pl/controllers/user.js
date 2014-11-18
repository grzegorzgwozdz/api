var User = require('../models/user.js')

exports.getUsers = function (req, res) {
    User.Users.findAll().then(function (data) {
        res.json(data);
    }, function (err) {
        res.json(err);
    })
};
exports.postUser = function (req, res) {
    User.Users.build({
        Username: req.body.Username,
        Password: req.body.Password,
        Name: req.body.Name
    }).save()
    .then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        })
};