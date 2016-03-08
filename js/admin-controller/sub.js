'use strict';

angular.module('szczesniakAdmin')
    .controller('SubCtrl', function ($scope, $rootScope, $http) {


        $scope.subs = [];
        $rootScope.subDetalis = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/subs')
            .then(function (data) {
               
                $scope.subs = data.data;
                
            });
        $scope.deleteSub = function (id) {

            $http.delete('http://pszcz.projekty.surprise.design:3123/subD/' + id)
                .then(function () {
                    console.log('usunieto');
                    
                });
        };
        
        $scope.getSub = function (id) {
            $http.get('http://pszcz.projekty.surprise.design:3123/sub/' + id)
                .then(function (data) {
                    $rootScope.subDetalis = data.data;
                    console.log($scope.subDetalis);
                });
        }
        
        $scope.addSub = function (data) {
            data.descriptionPl = data.htmlVariablePl;
            data.descriptionEn = data.htmlVariableEn;
            console.log(data);
            $http.post('http://pszcz.projekty.surprise.design:3123/sub', data)
                .then(function () {
                    console.log('dodano');

                });


        };
        $scope.updateSub = function (id,data) {
                console.log(id);
            $http.put('http://pszcz.projekty.surprise.design:3123/subU/'+id, data)
                .then(function () {
                    console.log('update');

                });


        };
        
          $scope.custom = true;
        $scope.toggleCustom = function () {
            $scope.custom = $scope.custom === false ? true : false;
        };

    });