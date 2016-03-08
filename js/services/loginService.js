'use strict';
angular.module('szczesniakAdmin').factory('loginService', function($http,$location,sessionService) {
    return {
        login: function(login,password, scope) {

            $http.post('http://pszcz.projekty.surprise.design:3123/users/login', {
                login: login,
                password: password
            }, {
                    withCredentials: true
            }).success(function(data) {
                //zalogował
                sessionService.set('user',data.uid);
               
                $location.path('/main');
               
            }).error(function(error) {
                //nie zalogował
                scope.blad = 'Zły login lub hasło';
                $location.path('/');

            });
        },
        wyloguj: function() {


            sessionService.destroy('user');
            $location.path('/login');
        },
        isLogged: function() {
            if(sessionService.get('user')) return true;
        }
    }
});