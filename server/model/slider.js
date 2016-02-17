var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SliderSchema = new Schema({
    img: String,      
});

module.exports = mongoose.model('Slider', SliderSchema);