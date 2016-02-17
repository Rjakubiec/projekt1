var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImgSchema = new Schema({
    
    namePl: String,
    nameEn: String,   
    img: String
    
});

module.exports = mongoose.model('Img', ImgSchema);