'use strict';

angular.module('szczesniakAdmin')
    .controller('NewNewsCtrl', function ($scope, $rootScope, $http) {

        $scope.newss = [];
        

        $http.get('http://localhost:3333/newss')
            .then(function (data) {

                $scope.newss = data.data;
               
                
            });
        
        $scope.addNews = function (data) {
            data.descriptionPl = data.htmlVariablePl;
            data.descriptionEn = data.htmlVariableEn;
            console.log(data);
            $http.post('http://localhost:3333/news', data)
                .then(function () {
                    console.log('dodano');

                });
        };
         $scope.deleteNews = function (id) {

            $http.delete('http://localhost:3333/newsD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.updateNews = function (id,data) {

            $http.put('http://localhost:3333/newsU/'+id, data)
                .then(function () {
                    console.log('update');

                });


        };
        

    });