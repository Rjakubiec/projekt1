'use strict';

angular
	.module('szczesniak',[
		'ngAnimate',
		'ngResource',
		'ngRoute',
		'ui.bootstrap',
		'ui.bootstrap.modal'
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
            .when('/login', {
				templateUrl: 'views/logowanie.html',
				controller: 'LogowanieCtrl'
			})
			.otherwise({
		        redirectTo: '/'
	      	});
      
    });
    