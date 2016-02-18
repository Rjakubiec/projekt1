'use strict';

angular.module('szczesniakAdmin')
    .controller('NewUserCtrl', function ($scope, $rootScope, $http) {


        $scope.users = [];


        $http.get('http://localhost:3333/users')
            .then(function (data) {
               
                $scope.users = data.data;
            });
        $scope.deleteUser = function (id) {

            $http.delete('http://localhost:3333/userD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.addUser = function (data) {
            console.log(data);
            $http.post('http://localhost:3333/user', data)
                .then(function () {
                    console.log('dodano');

                });


        };
        $scope.updateUser = function (id,data) {

            $http.put('http://localhost:3333/userU/'+id, data)
                .then(function () {
                    console.log('update');

                });


        };

    });