var Sign = require("../models/Signs.js");


var GeoSign = function() {
	
}

function getSign() {
Sign.find({"sign.SR_DIST": "0201"}, function(err, docs){
	console.log(docs)
}).limit(100)
}
module.exports = getSign;