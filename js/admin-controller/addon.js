'use strict';

angular.module('szczesniakAdmin')
    .controller('AddonCtrl', function ($scope, $rootScope, $http) {


        $scope.addons = [];


        $http.get('http://localhost:3333/addons')
            .then(function (data) {
               
                $scope.addons = data.data;
                
            });
        $scope.deleteAddon = function (id) {

            $http.delete('http://localhost:3333/addonD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.addAddon = function (data) {
            console.log(data);
            $http.post('http://localhost:3333/addon', data)
                .then(function () {
                    console.log('dodano');

                });


        };
        $scope.updateAddon = function (id,data) {

            $http.put('http://localhost:3333/addonU/'+id, data)
                .then(function () {
                    console.log('update');

                });


        };

    });