var Sign = require("../models/Signs.js");
var gsigns = require("../prsdata/geoPark.json");

	/*function mongoUp() {
    	var swsign = new Sign({ sign: record });
        if (record.SIGNDESC1.match(sweep) && record.SG_KEY_BOR === "K") {           
            swsign.save(function(err) {
                if (err) {
                    console.log(err);
                } 
            });
        } 
      }*/

      console.log(gsigns.length)

      module.exports = gsigns;