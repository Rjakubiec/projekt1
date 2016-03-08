'use strict';

angular.module('szczesniakAdmin')
    .controller('AddonCtrl', function ($scope, $rootScope, $http) {


        $scope.addons = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/addons')
            .then(function (data) {
               
                $scope.addons = data.data;
                
            });
        $scope.deleteAddon = function (id) {

            $http.delete('http://pszcz.projekty.surprise.design:3123/addonD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.addAddon = function (data) {
            console.log(data);
            $http.post('http://pszcz.projekty.surprise.design:3123/addon', data)
                .then(function () {
                    console.log('dodano');

                });


        };
        $scope.updateAddon = function (id,data) {

            $http.put('http://pszcz.projekty.surprise.design:3123/addonU/'+id, data)
                .then(function () {
                    console.log('update');

                });


        };

    });