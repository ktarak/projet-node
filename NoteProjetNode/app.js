var express = require('express');
var app = express();

var matiereControler = require('./matiere/MatiereController');

app.use('/matieres', matiereControler);

module.exports = app;