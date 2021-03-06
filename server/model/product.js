var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    
    namePl: String,
    nameEn: String,
    descriptionPl: String,
    descriptionEn: String,
    url: [String],
    typPl: String,
    typEn: String, // strażackie, wojskowe inne
    categoryPl: String, // Kontenery strażackie Przyczepy strażackie itp 
    categoryEn: String,
    sizePl: String, // lekkie cięzkie itp
    sizeEn: String, 
    urlPdf: String // jeśli tego nie będzie to usuń :)
});

module.exports = mongoose.model('Product', ProductSchema);