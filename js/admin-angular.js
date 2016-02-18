'use strict';

angular
	.module('szczesniakAdmin',[
		'ngAnimate',
		'ngResource',
		'ngRoute',
		'ui.bootstrap',
		'ui.bootstrap.modal',
        'bootstrapLightbox',
        'datatables'
        
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
            .when('/main/newProducts', {
				templateUrl: 'views/admin/newproducts.html',
				controller: 'NewProductsCtrl'
			})
            .when('/main/newNews', {
				templateUrl: 'views/admin/newnews.html',
				controller: 'NewNewsCtrl'
			})  
            .when('/main/newGallery', {
				templateUrl: 'views/admin/newgallery.html',
				controller: 'NewGalleryCtrl'
			})            	           		
			.otherwise({
		        redirectTo: '/login'
	      	});
      
    });