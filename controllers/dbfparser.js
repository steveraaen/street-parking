var Parser = require('dbf-parser');
var Sign = require("../models/Signs.js");
	
    var parser = new Parser('./Parking_Regulation_Shapefile.dbf');
    parser.on('start', function(p) {
        console.log('dBase file parsing has started');
    });

    parser.on('header', function(h) {
        console.log('dBase file header has been parsed');
    });
    var sweep = "SANITATION BROOM SYMBOL"
   
    parser.on('record', function(record) {
    	var swsign = new Sign({ sign: record });
        if (record.SIGNDESC1.match(sweep) && record.SG_KEY_BOR === "K") {           
            swsign.save(function(err) {
                if (err) {
                    console.log(err);
                } 
            });
        } 
    });
    parser.on('end', function(p) {
        console.log('Finished parsing the dBase file');
    });

    module.exports = parser;
    
