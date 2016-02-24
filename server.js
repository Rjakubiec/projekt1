var express = require('express');
var morgan = require('morgan');
var multer = require('multer')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './img/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');
var upload1 = multer({ //multer settings
    storage: storage
}).array('files', 5);

var User = require('./server/model/user');
var Slider = require('./server/model/slider');
var Img = require('./server/model/img');
var Size = require('./server/model/size');
var Typ = require('./server/model/typ');
var Category = require('./server/model/category');
var News = require('./server/model/news');
var Product = require('./server/model/product');



mongoose.connect('mongodb://michalmw:1q2w3e4r5t@ds011268.mongolab.com:11268/psszczesniak', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connect');
    }
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Origin,__setXHR_");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST,OPTIONS');
    res.header('Access-Control-Allow-Credentials', "true");
    next();
});







/////////////////////////////////////crud slider////////////////////////// 
// dodaj im slidera
app.post('/slider', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        var slider = new Slider();
        slider.img = req.file.path;
        slider.save();
        res.json({ error_code: 0, err_desc: null });
    })

});

// lista img sliderów
app.get('/sliders', function (req, res, next) {
    Slider.find(function (err, slider) {
        if (err) res.json('error:' + err);

        res.json(slider);
    });
});
//konkretny img slidera
app.get('/slider/:id', function (req, res) {
    var id = req.params.id;
    Slider.findOne({ _id: id }, function (err, slider) {
        res.json(slider);
    });
});

//usuwanie img slidera
app.delete('/sliderD/:id', function (req, res, next) {
    Slider.findByIdAndRemove(req.params.id, req.body, function (err, slider) {
        if (err) return next(err);
        res.json(slider);
    });
});
// update img slidera
app.put('/sliderU/:id', function (req, res, next) {
    Slider.findByIdAndUpdate(req.params.id, req.body, function (err, slider) {
        if (err) return next(err);
        res.json(slider);
    });
});

/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////crud img//////////////////////////////////////
// dodaj img gallery 
app.post('/img', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        var img = new Img();
        img.url = req.file.path;
        img.save();
        res.json({ error_code: 0, err_desc: null });
    })

});

// lista img sliderów
app.get('/imgs', function (req, res, next) {
    Img.find(function (err, img) {
        if (err) res.json('error:' + err);

        res.json(img);
    });
});
//konkretny img slidera
app.get('/img/:id', function (req, res) {
    var id = req.params.id;
    Img.findOne({ _id: id }, function (err, img) {
        res.json(img);
    });
});

//usuwanie img slidera
app.delete('/imgD/:id', function (req, res, next) {
    Img.findByIdAndRemove(req.params.id, req.body, function (err, img) {
        if (err) return next(err);
        res.json(img);
    });
});
// update img slidera
app.put('/imgU/:id', function (req, res, next) {
    Img.findByIdAndUpdate(req.params.id, req.body, function (err, img) {
        if (err) return next(err);
        res.json(img);
    });
});
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Logowanie////////////////////
app.post('/users/login', function (req, res) {

    User.findOne({
        login: req.body.login
    }, function (err, user) {
        if (err) throw err;
        
        if (!user) {          
            console.log("zly login");
        } else {
           
            if (user.password == req.body.password) {
          
                console.log("dobre dane");
                
                res.json({ success: true });
            } else {
                
                console.log("zle haslo");
               
            };
        };
    });
});

////////////////////////////////////////////////////////////////////////

///////////////////////////////////////crud products//////////////////////////////////////
// dodaj product
app.post('/product', function (req, res) {

    upload1(req, res, function (err) {

        if (err) {
            console.log(err);
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        var product = new Product();

        for (var i in req.files) {
            product.url[i] = req.files[i].path;
        }

        product.save();
        res.json({ error_code: 0, err_desc: null });
    })

});

// lista product 
app.get('/products', function (req, res, next) {
    Product.find(function (err, product) {
        if (err) res.json('error:' + err);

        res.json(product);
    });
});
//konkretny product 
app.get('/product/:id', function (req, res) {
    var id = req.params.id;
    Product.findOne({ _id: id }, function (err, product) {
        res.json(product);
    });
});

//usuwanie product
app.delete('/productD/:id', function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, req.body, function (err, product) {
        if (err) return next(err);
        res.json(product);
    });
});
// update product
app.put('/productU/:id', function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, function (err, product) {
        if (err) return next(err);
        res.json(product);
    });
});
//////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////Crud size care/////////////////////////////////
app.post('/size', function (req, res, next) {

    var size = new Size();
    size.sizePl = req.body.sizePl;
    size.sizeEn = req.body.sizeEn;


    size.save(function (err) {

        if (err) return next(err);
        res.json('Poprawnioe dodano ;-)');

    });
});


app.get('/sizes', function (req, res, next) {
    Size.find(function (err, size) {
        if (err) res.json('error:' + err);

        res.json(size);
    });
});


app.get('/size/:id', function (req, res) {

    var id = req.params.id;

    Size.findOne({ _id: id }, function (err, size) {
        res.json(size);
    });
});
//usuwanie size
app.delete('/sizeD/:id', function (req, res, next) {
    Size.findByIdAndRemove(req.params.id, req.body, function (err, size) {
        if (err) return next(err);
        res.json(size);
    });
});
// update size
app.put('/sizeU/:id', function (req, res, next) {
    Size.findByIdAndUpdate(req.params.id, req.body, function (err, size) {
        if (err) return next(err);
        res.json(size);
    });
});
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////Crud typ car/////////////////////////////////
app.post('/typ', function (req, res, next) {

    var typ = new Typ();
    typ.typPl = req.body.typPl;
    typ.typEn = req.body.typEn;


    typ.save(function (err) {

        if (err) return next(err);
        res.json('Poprawnioe dodano ;-)');

    });
});


app.get('/typs', function (req, res, next) {
    Typ.find(function (err, typ) {
        if (err) res.json('error:' + err);

        res.json(typ);
    });
});


app.get('/typ/:id', function (req, res) {

    var id = req.params.id;

    Typ.findOne({ _id: id }, function (err, typ) {
        res.json(typ);
    });
});
//usuwanie typ
app.delete('/typD/:id', function (req, res, next) {
    Typ.findByIdAndRemove(req.params.id, req.body, function (err, typ) {
        if (err) return next(err);
        res.json(typ);
    });
});
// update typ
app.put('/typU/:id', function (req, res, next) {
    Typ.findByIdAndUpdate(req.params.id, req.body, function (err, typ) {
        if (err) return next(err);
        res.json(typ);
    });
});
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////Crud categroy car/////////////////////////////////
app.post('/category', function (req, res, next) {

    var category = new Category();
    category.categoryPl = req.body.categoryPl;
    category.categoryEn = req.body.categoryEn;


    category.save(function (err) {

        if (err) return next(err);
        res.json('Poprawnioe dodano ;-)');

    });
});


app.get('/categorys', function (req, res, next) {
    Category.find(function (err, category) {
        if (err) res.json('error:' + err);

        res.json(category);
    });
});


app.get('/category/:id', function (req, res) {

    var id = req.params.id;

    Category.findOne({ _id: id }, function (err, category) {
        res.json(category);
    });
});
//usuwanie category
app.delete('/categoryD/:id', function (req, res, next) {
    Category.findByIdAndRemove(req.params.id, req.body, function (err, category) {
        if (err) return next(err);
        res.json(category);
    });
});
// update category
app.put('/categoryU/:id', function (req, res, next) {
    Category.findByIdAndUpdate(req.params.id, req.body, function (err, category) {
        if (err) return next(err);
        res.json(category);
    });
});
///////////////////////////////////////////////////////////////////////////////

////////////////////////////////Crud News//////////////////////////////////////

app.post('/news', function (req, res, next) {

    var news = new News();
    news.namePl = req.body.namePl;
    news.nameEn = req.body.nameEn;
    news.descriptionPl = req.body.descriptionPl;
    news.descriptionEn = req.body.descriptionEn;
    news.save(function (err) {

        if (err) return next(err);
        res.json('Poprawnioe dodano ;-)');

    });
});


app.get('/newss', function (req, res, next) {
    News.find(function (err, news) {
        if (err) res.json('error:' + err);

        res.json(news);
    });
});


app.get('/news/:id', function (req, res) {

    var id = req.params.id;

    News.findOne({ _id: id }, function (err, news) {
        res.json(news);
    });
});
//usuwanie news
app.delete('/newsD/:id', function (req, res, next) {
    News.findByIdAndRemove(req.params.id, req.body, function (err, news) {
        if (err) return next(err);
        res.json(news);
    });
});
// update news
app.put('/newsU/:id', function (req, res, next) {
    News.findByIdAndUpdate(req.params.id, req.body, function (err, news) {
        if (err) return next(err);
        res.json(news);
    });
});
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////Crud usera//////////////////////////////////////

app.post('/user', function (req, res, next) {

    var user = new User();
    user.login = req.body.login;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function (err) {

        if (err) return next(err);
        res.json('Poprawnioe dodano ;-)');

    });
});


app.get('/users', function (req, res, next) {
    User.find(function (err, user) {
        if (err) res.json('error:' + err);

        res.json(user);
    });
});


app.get('/user/:id', function (req, res) {

    var id = req.params.id;

    User.findOne({ _id: id }, function (err, user) {
        res.json(user);
    });
});
//usuwanie user
app.delete('/userD/:id', function (req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
});
// update user
app.put('/userU/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
});
///////////////////////////////////////////////////////////////////////////////////



app.listen(3333, function (err) {

    if (err) throw err;
    console.log('Server running on port 3333');
    console.log('Jak wejdziesz http://localhost:3333/users to zobaczysz jednego mojego usera ;-)');
});