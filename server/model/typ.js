var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TypSchema = new Schema({
    
    typPl: String,
    typEn: String
    
});

module.exports = mongoose.model('Typ', TypSchema);