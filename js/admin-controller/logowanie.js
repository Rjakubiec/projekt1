'use strict';

angular.module('szczesniakAdmin')
    .constant("authUrl","http://localhost:3333/users/login")
	.controller('LogowanieCtrl', function($scope, $rootScope, $location,$http,authUrl,loginService){
		

        $scope.blad = '';
        $scope.zaloguj = function(login,password) {


            loginService.login(login,password,$scope);

        };
        $scope.wyloguj = function () {
            loginService.wyloguj();
        };


		// $scope.zaloguj = function (login,password) {
        //     $http.post(authUrl, {
        //         login : login,
        //         password : password
        //     }, {
        //         withCredentials: true
        //     }).success (function (data) {
        //         $location.path("/main");
        //     }).error(function (error) {
        //         console.log(error);
        //     });
        //     
        // }

		
	});