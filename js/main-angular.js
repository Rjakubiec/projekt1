'use strict';

angular
	.module('szczesniak',[
		'ngAnimate',
		'ngResource',
		'ngRoute',
		'ui.bootstrap',
		'ui.bootstrap.modal',
        'bootstrapLightbox',
        'uiGmapgoogle-maps'
        
        
	])
	.config(function ($routeProvider) {

		$routeProvider
			.when('/', {               
				templateUrl: 'views/firma.html',
				controller: 'FirmaCtrl'
			})
			.when('/produkty', {
				templateUrl: 'views/produkty.html',
				controller: 'ProduktyCtrl'
			})
			.when('/serwis', {
				templateUrl: 'views/serwis.html',
				controller: 'SerwisCtrl'
			})
			.when('/praca', {
				templateUrl: 'views/praca.html',
				controller: 'PracaCtrl'
			})
            .when('/galeria', {
				templateUrl: 'views/galeria.html',
				controller: 'GaleriaCtrl'
			})
			.when('/kontakt', {
				templateUrl: 'views/kontakt.html',
				controller: 'KontaktCtrl'
			})
            .when('/en', {
				templateUrl: 'views/en/company.html',
				controller: 'FirmaCtrl'
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
			.otherwise({
		        redirectTo: '/'
	      	});
      
    }).run(function($rootScope,$location,$http) {

    	$rootScope.mainLanguage = 'PL';
        
        $rootScope.menus= [];
        
        // $http.get('http://localhost:3333/menus')
        //     .then(function (data) {
        //         console.log(data.data);
        //         $rootScope.menus = data.data;
        //     });

    	$rootScope.menus = [
    		{'namePl':'Firma', 'nameEn':'Company', 'urlPl': 'firma', 'urlEn': 'company'},
    		{'namePl':'Produkty', 'nameEn':'Products', 'urlPl': 'produkty', 'urlEn': 'products'},
    		{'namePl':'Serwis', 'nameEn':'Service', 'urlPl': 'serwis', 'urlEn': 'service'},
    		{'namePl':'Praca', 'nameEn':'Job', 'urlPl': 'praca', 'urlEn': 'job'},
    		{'namePl':'Galeria', 'nameEn':'Gallery', 'urlPl': 'galeria', 'urlEn': 'gallery'},
            {'namePl':'Kontakt', 'nameEn':'Contact', 'urlPl': 'kontakt', 'urlEn': 'contact'},
            
    	];
    	$rootScope.changeLanguage = function(language) {

    		if(language == 'PL') {
    			$rootScope.mainLanguage = 'EN';
    			$location.path('en'+ $location.$$path);
                console.log($location.$$path);

    		} else {
    			$rootScope.mainLanguage = 'PL';
    			$location.path(($location.$$path).slice(3));
                console.log($location.$$path);
    		}

    	};

    });
;
    