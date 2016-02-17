var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//id usunelem bo id samo jest nadawane ;-)
var UserSchema = new Schema({
    login: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);