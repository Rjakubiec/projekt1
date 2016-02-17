var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({   
    namePl: String,
    nameEn: String,
    urlPl: String,  // galeria firma itp
    urlEn: String   // gallety company itp
});

module.exports = mongoose.model('Menu', MenuSchema);