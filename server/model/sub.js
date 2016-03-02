var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubSchema = new Schema({
    namePl: String,
    nameEn: String,
    descriptionPl: String,
    descriptionEn: String
   
});

module.exports = mongoose.model('Sub', SubSchema);