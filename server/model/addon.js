var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddonSchema = new Schema({
    
    nrTele: String,
    eMail: String,
    godzPracy: String,
    topTekstPl: String,
    topTekstEn: String
    
});

module.exports = mongoose.model('Addon', AddonSchema);