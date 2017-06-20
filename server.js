var express = require("express");
var mongoose = require("mongoose");
var pwds = require("./passwds");
/*var parser = require("./controllers/dbfparser.js");*/
var getSign = require("./controllers/getSigns.js");



var app = express();

mongoose.connect(pwds.mong);
var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
    /*parser.parse();*/
    getSign()

    app.listen(3000, function(req, res) {
        console.log('connected on 3000')
    })
});
