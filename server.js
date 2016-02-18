var express = require('express');
var morgan = require('morgan');
var multer  = require('multer')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



var User = require('./server/model/user');
var Slider = require('./server/model/slider');
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
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST,OPTIONS');
  next();
});

//crud slider 
// dodaj im slidera
app.post('/slider', function(req,res,next) {

  var slider = new Slider();
  slider.img = req.body.img;
  
  slider.save(function(err) {

      if (err) return next(err);
      res.json('Poprawnioe dodano ;-)');

  });
});
// lista img sliderów
app.get('/sliders', function(req,res,next) {
  Slider.find(function(err,slider) {
    if(err) res.json('error:'+err);

    res.json(slider);
  });
});
//konkretny img slidera
app.get('/slider/:id', function(req, res) {
  var id = req.params.id;
  Slider.findOne({_id:id}, function(err,slider){
    res.json(slider);
  });
});

//usuwanie img slidera
app.delete('/sliderD/:id', function(req, res, next) {
  Slider.findByIdAndRemove(req.params.id, req.body, function (err, slider) {
    if (err) return next(err);
    res.json(slider);
  });
});
// update img slidera
app.put('/sliderU/:id', function(req, res, next) {
  Slider.findByIdAndUpdate(req.params.id, req.body, function (err, slider) {
    if (err) return next(err);
    res.json(slider);
  });
});

//Crud usera

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


app.get('/users', function(req,res,next) {
  User.find(function(err,user) {
    if(err) res.json('error:'+err);

    res.json(user);
  });
});


app.get('/user/:id', function(req, res) {

  var id = req.params.id;

  User.findOne({_id:id}, function(err,user){
    res.json(user);
  });
});
//usuwanie user
app.delete('/userD/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});
// update user
app.put('/userU/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});




app.listen(3333, function(err) {

    if(err) throw err;
    console.log('Server running on port 3333');
    console.log('Jak wejdziesz http://localhost:3333/users to zobaczysz jednego mojego usera ;-)');
});