var express = require('express');
var bodyParser = require('body-parser');
var database = require('./controllers/database.js');


var api = require('./routes/api');
var app = express();

app.use(bodyParser());
app.use('/api', api);
app.listen(3000);

module.exports = app;
