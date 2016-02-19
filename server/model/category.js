var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    
    categoryPl: String,
    categoryEn: String
    
});

module.exports = mongoose.model('Category', CategorySchema);