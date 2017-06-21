var Sign = require("../models/Signs.js");


var GeoSign = function() {
	OBJECTID = this.OBJECTID;
	SG_KEY_BOR = this.SG_KEY_BOR;
	SG_ORDER_N = this.SG_ORDER_N;
	SG_SEQNO_N = this.SG_SEQNO_N;
	SG_MUTCD_C = this.SG_MUTCD_C;
	SR_DIST = this.SR_DIST;
	SG_SIGN_FC = this.SG_SIGN_FC;
	SG_ARROW_D = this.SG_ARROW_D;
	
}

function getSign() {
var arr = [];
Sign.find({"sign.SR_DIST": "0201"}, function(err, docs){
	for(let i = 0; i < docs.length; i++) {
		var sign = new GeoSign(docs[i])
		arr.push(sign)

	}
console.log(arr)
}).limit(100);

}
module.exports = getSign;