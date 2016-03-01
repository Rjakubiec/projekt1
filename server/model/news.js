var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    namePl: String,
    nameEn: String,
    descriptionPl: String,
    descriptionEn: String,
    img: String,
    data: {type: Date, default: Date.now}
});

module.exports = mongoose.model('News', NewsSchema);