'use strict';

angular
	.module('szczesniakAdmin',[
		'ngAnimate',
		'ngResource',
		'ngRoute',
		'ui.bootstrap',
		'ui.bootstrap.modal',
        'bootstrapLightbox'
        
        
        
	])
	.config(function ($routeProvider) {

		$routeProvider
			.when('/login', {               
				templateUrl: 'views/logowanie.html',
				controller: 'LogowanieCtrl'
			})
			.when('/main', {
				templateUrl: 'views/panel.html',
				controller: 'PanelCtrl'
			})			
			.otherwise({
		        redirectTo: '/login'
	      	});
      
    });