'use strict';

angular
	.module('szczesniakAdmin',[
		'ngAnimate',
		'ngResource',
		'ngRoute',
		'ui.bootstrap',
		'ui.bootstrap.modal',
        'bootstrapLightbox',
        'datatables',
        'ngFileUpload',        
        'textAngular'
   
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
            .when('/main/newPropertis', {
				templateUrl: 'views/admin/newpropertis.html',
				controller: 'NewPropertisCtrl'
			})           	           		
			.otherwise({
		        redirectTo: '/login'
	      	});
      
    }).run(function($rootScope, $location,loginService) {

      //var routeperm=['/login'];
      $rootScope.$on('$routeChangeStart', function() {

          if(!loginService.isLogged()) {


              $rootScope.zalogowany = false;
              $location.path('/login');
          } else {


              $rootScope.zalogowany = true;
          }


      });
     });