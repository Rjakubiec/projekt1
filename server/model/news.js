var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    namePl: String,
    nameEn: String,
    descriptionPl: String,
    descriptionEn: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String  
    // Psszczesniak ma na swojej stronie teraz 4 zdjęcia do newsa 
});

module.exports = mongoose.model('News', NewsSchema);