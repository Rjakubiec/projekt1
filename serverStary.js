var express = require('express');
var morgan = require('morgan');
var multer = require('multer')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var storage1 = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './img/slider/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp +'.png')
    }
});
var storage2 = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './img/news/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp +'.png')
    }
});
var storage3 = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './img/gallery/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp +'.png')
    }
});
var storage4 = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './img/products/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp +'.png')
    }
});

var upload1 = multer({ //slider
    storage: storage1
}).single('file');
var upload2 = multer({ //news
    storage: storage2
}).single('file');
var upload3 = multer({ //gallery
    storage: storage3
}).single('file');
var upload4 = multer({ //products
    storage: storage4
}).array('files', 5);

var User = require('./server/model/user');
var Slider = require('./server/model/slider');
var Img = require('./server/model/img');
var Size = require('./server/model/size');
var Typ = require('./server/model/typ');
var Category = require('./server/model/category');
var News = require('./server/model/news');
var Product = require('./server/model/product');
var Addon = require('./server/model/addon');
var Sub = require('./server/model/sub');



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
    upload1(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        var slider = new Slider();
         slider.namePl = req.body.slider.namePl;
        slider.nameEn = req.body.slider.nameEn;
        slider.descriptionPl = req.body.slider.descriptionPl;
        slider.descriptionEn = req.body.slider.descriptionEn;
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
    upload3(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        var img = new Img();
        img.namePl = req.body.img.namePl;
        img.nameEn = req.body.img.nameEn;
        img.typPl = req.body.img.typPl;
        img.typEn = req.body.img.typEn;
        img.url = req.file.path;
        img.save();
        res.json({ error_code: 0, err_desc: null });
    })

});

// lista img gallery
app.get('/imgs', function (req, res, next) {
    Img.find(function (err, img) {
        if (err) res.json('error:' + err);

        res.json(img);
    });
});
//konkretny img gallery
app.get('/img/:id', function (req, res) {
    var id = req.params.id;
    Img.findOne({ _id: id }, function (err, img) {
        res.json(img);
    });
});

//usuwanie img gallery
app.delete('/imgD/:id', function (req, res, next) {
    Img.findByIdAndRemove(req.params.id, req.body, function (err, img) {
        if (err) return next(err);
        res.json(img);
    });
});
// update img gallery
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

    upload4(req, res, function (err) {

        if (err) {
            console.log(err);
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        var product = new Product();

        for (var i in req.files) {
            product.url[i] = req.files[i].path;
        }

        product.namePl = req.body.product.namePl;
        product.nameEn = req.body.product.nameEn;
        product.descriptionPl = req.body.product.descriptionPl;
        product.descriptionEn = req.body.product.descriptionEn;
        product.typPl = req.body.product.typPl;
        product.typEn = req.body.product.typEn;
        product.categoryPl = req.body.product.categoryPl;
        product.categoryEn = req.body.product.categoryEn;
        product.sizePl = req.body.product.sizePl;
        product.sizeEn = req.body.product.sizeEn;
        product.urlPdf = req.body.product.urlPdf;

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
    size.categoryPl = req.body.categoryPl;
    size.categoryEn = req.body.categoryEn;
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
    category.typPl = req.body.typPl;
    category.typEn = req.body.typEn;
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
    upload2(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        var news = new News();
        news.namePl = req.body.news.namePl;
        news.nameEn = req.body.news.nameEn;
        news.descriptionPl = req.body.news.descriptionPl;
        news.descriptionEn = req.body.news.descriptionEn;
        news.img = req.file.path;
        news.save();
        res.json({ error_code: 0, err_desc: null });
    })

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

////////////////////////////////Crud addon//////////////////////////////////////

app.post('/addon', function (req, res, next) {

    var addon = new Addon();
    addon.nrTele = req.body.nrTele;
    addon.eMail = req.body.eMail;
    addon.godzPracy = req.body.godzPracy;
    addon.topTekstPl = req.body.topTekstPl;
    addon.topTekstEn = req.body.topTekstEn;

    addon.save(function (err) {

        if (err) return next(err);
        res.json('Poprawnioe dodano ;-)');

    });
});


app.get('/addons', function (req, res, next) {
    Addon.find(function (err, addon) {
        if (err) res.json('error:' + err);

        res.json(addon);
    });
});


app.get('/addon/:id', function (req, res) {

    var id = req.params.id;

    Addon.findOne({ _id: id }, function (err, addon) {
        res.json(addon);
    });
});
//usuwanie addon
app.delete('/addonD/:id', function (req, res, next) {
    Addon.findByIdAndRemove(req.params.id, req.body, function (err, addon) {
        if (err) return next(err);
        res.json(addon);
    });
});
// update addon
app.put('/addonU/:id', function (req, res, next) {
    Addon.findByIdAndUpdate(req.params.id, req.body, function (err, addon) {
        if (err) return next(err);
        res.json(addon);
    });
});
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////Crud sub//////////////////////////////////////

app.post('/sub', function (req, res, next) {

    var sub = new Sub();
    sub.namePl = req.body.namePl;
    sub.nameEn = req.body.nameEn;
    sub.descriptionPl = req.body.descriptionPl;
    sub.descriptionEn = req.body.descriptionEn;

    sub.save(function (err) {

        if (err) return next(err);
        res.json('Poprawnioe dodano ;-)');

    });
});


app.get('/subs', function (req, res, next) {
    Sub.find(function (err, sub) {
        if (err) res.json('error:' + err);

        res.json(sub);
    });
});


app.get('/sub/:id', function (req, res) {

    var id = req.params.id;

    Sub.findOne({ _id: id }, function (err, sub) {
        res.json(sub);
    });
});
//usuwanie sub
app.delete('/subD/:id', function (req, res, next) {
    Sub.findByIdAndRemove(req.params.id, req.body, function (err, sub) {
        if (err) return next(err);
        res.json(sub);
    });
});
// update sub
app.put('/subU/:id', function (req, res, next) {
    Sub.findByIdAndUpdate(req.params.id, req.body, function (err, sub) {
        if (err) return next(err);
        res.json(sub);
    });
});
///////////////////////////////////////////////////////////////////////////////////


app.listen(3123, function (err) {

    if (err) throw err;
    console.log('Server running on port 3123');
});