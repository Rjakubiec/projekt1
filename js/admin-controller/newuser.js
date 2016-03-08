'use strict';

angular.module('szczesniakAdmin')
    .controller('NewUserCtrl', function ($scope, $rootScope, $http) {


        $scope.users = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/users')
            .then(function (data) {
               
                $scope.users = data.data;
            });
        $scope.deleteUser = function (id) {

            $http.delete('http://pszcz.projekty.surprise.design:3123/userD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.addUser = function (data) {
            console.log(data);
            $http.post('http://pszcz.projekty.surprise.design:3123/user', data)
                .then(function () {
                    console.log('dodano');

                });


        };
        $scope.updateUser = function (id,data) {

            $http.put('http://pszcz.projekty.surprise.design:3123/userU/'+id, data)
                .then(function () {
                    console.log('update');

                });


        };

    });