'use strict';

angular
    .module('szczesniak', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ui.bootstrap',
        'ui.bootstrap.modal',
        // 'ngFileUpload', 
        'uiGmapgoogle-maps'

    ])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'FirmaCtrl'
            })
            .when('/company', {
                templateUrl: 'views/firma.html',
                controller: 'FirmaSubCtrl'
            })
            .when('/products', {
                templateUrl: 'views/produkty.html',
                controller: 'ProduktyCtrl'
            })
            .when('/service', {
                templateUrl: 'views/serwis.html',
                controller: 'SerwisCtrl'
            })
            .when('/job', {
                templateUrl: 'views/praca.html',
                controller: 'PracaCtrl'
            })
            .when('/gallery', {
                templateUrl: 'views/galeria.html',
                controller: 'GaleriaCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/kontakt.html',
                controller: 'KontaktCtrl'
            })
            .when('/news', {
                templateUrl: 'views/newsLista.html',
                controller: 'NewsCtrl'
            })
             .when('/news/:id', {
                templateUrl: 'views/news.html',
                controller: 'NewsCtrl'
            })
             .when('/product/:id', {
                templateUrl: 'views/produktDetal.html',
                controller: 'ProduktyDCtrl'
            })
            .when('/company/:id', {
                templateUrl: 'views/firma.html',
                controller: 'FirmaSubCtrl'
            })
            /////ANG///////
            .when('/en', {
                templateUrl: 'views/en/homeEn.html',
                controller: 'FirmaCtrl'
            })
            .when('/en/company', {
                templateUrl: 'views/en/company.html',
                controller: 'FirmaSubCtrl'
            })
            .when('/en/products', {
                templateUrl: 'views/en/products.html',
                controller: 'ProduktyCtrl'
            })
            .when('/en/service', {
                templateUrl: 'views/en/service.html',
                controller: 'SerwisCtrl'
            })
            .when('/en/job', {
                templateUrl: 'views/en/job.html',
                controller: 'PracaCtrl'
            })
            .when('/en/gallery', {
                templateUrl: 'views/en/gallery.html',
                controller: 'GaleriaCtrl'
            })
            .when('/en/contact', {
                templateUrl: 'views/en/contact.html',
                controller: 'KontaktCtrl'
            })          
            .when('en/news/:id', {
                templateUrl: 'views/en/news.html',
                controller: 'NewsCtrl'
            })            
            .when('en/news', {
                templateUrl: 'views/en/newsAll.html',
                controller: 'NewsCtrl'
            })
            .when('en/product/:id', {
                templateUrl: 'views/en/productDetalis.html',
                controller: 'ProduktyDCtrl'
            })
            .when('en/company/:id', {
                templateUrl: 'views/en/company.html',
                controller: 'FirmaSubCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    })
    .run(function ($rootScope, $location, $http) {

        $rootScope.mainLanguage = 'PL';

        $rootScope.menus = [];
        
        // $http.get('http://pszcz.projekty.surprise.design:3456/menus')
        //     .then(function (data) {
        //         console.log(data.data);
        //         $rootScope.menus = data.data;
        //     });

        $rootScope.menus = [
            { 'namePl': 'FIRMA', 'nameEn': 'COMPANY', 'urlPl': 'firma', 'urlEn': 'company'},
            { 'namePl': 'PRODUKTY', 'nameEn': 'PRODUCTS', 'urlPl': 'produkty', 'urlEn': 'products'},
            { 'namePl': 'SERWIS', 'nameEn': 'SERVICE', 'urlPl': 'serwis', 'urlEn': 'service' },
            { 'namePl': 'PRACA', 'nameEn': 'JOB', 'urlPl': 'praca', 'urlEn': 'job' },
            { 'namePl': 'GALERIA', 'nameEn': 'GALLERY', 'urlPl': 'galeria', 'urlEn': 'gallery' },
            { 'namePl': 'KONTAKT', 'nameEn': 'CONTACT', 'urlPl': 'kontakt', 'urlEn': 'contact' },

        ];
        $rootScope.changeLanguage = function (language) {

            if (language == 'PL') {
                $rootScope.mainLanguage = 'EN';
                //$location.path($rootScope.menus.urlEn = id)
                $location.path('en' + $location.$$path);
                console.log($location.$$path);

            } else {
                $rootScope.mainLanguage = 'PL';
                //$location.path($rootScope.menus.urlPl = id)
                $location.path(($location.$$path).slice(3));
                console.log($location.$$path);
            }

        };

    });

;    