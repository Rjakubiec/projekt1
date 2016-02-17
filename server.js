var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var User = require('./server/model/user');
var app = express();

mongoose.connect('mongodb://michalmw:1q2w3e4r5t@ds011268.mongolab.com:11268/psszczesniak', function(err) {
   if(err) {
       console.log(err);
   } else {
       console.log('Connect');
   }
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();
});
//tworzenie usera
//narazie bez szyfrowania hasla
//jak wroce to zrobie szyfrownie
app.post('/user', function(req,res,next) {

  var user = new User();
  user.login = req.body.login;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save(function(err) {

      if (err) return next(err);
      res.json('Poprawnioe dodano ;-)');

  });
});
//lista uzytkownikow
app.get('/users', function(req,res,next) {
  var users = User.find(function(err,user) {
    if(err) res.json('error:'+err);

    res.json(user);
  });
});

//informacje o tym jedynm uzytkowniku, ktorego wyslesz mi id
//wywolujeszto za pomocja /user/i tutaj jego id
app.post('/user/:id', function(req, res) {

  var id = req.params.id;

  var user = User.findOne({_id:id}, function(err,user){
    res.json(user);
  });
});


app.listen(3333, function(err) {

    if(err) throw err;
    console.log('Server running on port 3333');
    console.log('Jak wejdziesz http://localhost:3333/users to zobaczysz jednego mojego usera ;-)');
});