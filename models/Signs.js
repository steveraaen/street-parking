var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SignSchema = new Schema({

  sign: {}

/*  '@sequenceNumber': Number,
  '@deleted': Boolean,
  OBJECTID: Number,
  SG_KEY_BOR: String,
  SG_ORDER_N: String,
  SG_SEQNO_N: String,
  SG_MUTCD_C: String,
  SR_DIST: String,
  SG_SIGN_FC: String,
  SG_ARROW_D: String,
  x: String,
  y: String,
  SIGNDESC1: String*/
});

var Sign = mongoose.model("Sign", SignSchema);

module.exports = Sign;
