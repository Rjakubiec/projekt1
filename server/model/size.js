var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SizeSchema = new Schema({
    
    sizePl: String,
    sizeEn: String
    
});

module.exports = mongoose.model('Size', SizeSchema);