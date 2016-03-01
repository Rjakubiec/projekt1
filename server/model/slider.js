var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SliderSchema = new Schema({
    namePl: String,
    nameEn: String,
    descriptionPl: String,
    descriptionEn: String,
    img: String,      
});

module.exports = mongoose.model('Slider', SliderSchema);