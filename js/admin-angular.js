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
				templateUrl: 'views/admin/logowanie.html',
				controller: 'LogowanieCtrl'
			})
			.when('/main', {
				templateUrl: 'views/admin/panel.html',
				controller: 'PanelCtrl'
			})
            .when('/main/newUser', {
				templateUrl: 'views/admin/newuser.html',
				controller: 'NewUserCtrl'
			})
            .when('/main/newSlider', {
				templateUrl: 'views/admin/newslider.html',
				controller: 'NewSliderCtrl'
			})          	           		
			.otherwise({
		        redirectTo: '/login'
	      	});
      
    });