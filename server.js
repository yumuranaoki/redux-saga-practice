"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.send('index');
});
app.listen(8000, function () {
    console.log('app is running');
});
