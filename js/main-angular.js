'use strict';

angular
	.module('szczesniak',[
		'ngAnimate',
		'ngResource',
		'ngRoute',
		'ui.bootstrap',
		'ui.bootstrap.modal',
        'bootstrapLightbox'
	])
	.config(function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/firma.html',
				controller: 'FirmaCtrl'
			})
			.when('/product', {
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
            .when('/en', {
				templateUrl: 'views/en/firma.html',
				controller: 'FirmaCtrl'
			})
			.when('/en/product', {
				templateUrl: 'views/en/produkty.html',
				controller: 'ProduktyCtrl'
			})
			.when('/en/service', {
				templateUrl: 'views/en/serwis.html',
				controller: 'SerwisCtrl'
			})
			.when('/en/job', {
				templateUrl: 'views/en/praca.html',
				controller: 'PracaCtrl'
			})
            .when('/en/gallery', {
				templateUrl: 'views/en/galeria.html',
				controller: 'GaleriaCtrl'
			})
			.when('/en/contact', {
				templateUrl: 'views/en/kontakt.html',
				controller: 'KontaktCtrl'
			})
            .when('/login', {
				templateUrl: 'views/logowanie.html',
				controller: 'LogowanieCtrl'
			})
			.otherwise({
		        redirectTo: '/'
	      	});
      
    });
    