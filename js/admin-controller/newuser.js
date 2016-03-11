'use strict';

angular.module('szczesniakAdmin')
    .controller('NewUserCtrl', function ($scope, $rootScope, $http,$window) {


        $scope.users = [];


        $http.get('http://pszcz.projekty.surprise.design:3456/users')
            .then(function (data) {
               
                $scope.users = data.data;
            });
        $scope.deleteUser = function (id) {

            $http.delete('http://pszcz.projekty.surprise.design:3456/userD/' + id)
                .then(function () {
                    console.log('usunieto');
                    $window.location.reload();

                });
        };
        $scope.addUser = function (data) {
            console.log(data);
            $http.post('http://pszcz.projekty.surprise.design:3456/user', data)
                .then(function () {
                    console.log('dodano');
                    $window.location.reload();
                });


        };
        $scope.updateUser = function (id,data) {

            $http.put('http://pszcz.projekty.surprise.design:3456/userU/'+id, data)
                .then(function () {
                    console.log('update');

                });


        };

    });