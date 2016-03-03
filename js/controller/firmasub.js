'use strict';

angular.module('szczesniak').controller('FirmaSubCtrl', function ($scope, $rootScope, $http,$sce) {


    $rootScope.podstrona = true;
    $scope.subs = [];
    $scope.subDetalis = [];
 
        $http.get('http://localhost:3333/subs')
            .then(function (data) {
                console.log(data.data);
                $scope.subs = data.data;
            });
             $scope.getSub = function (id) {
            $http.get('http://localhost:3333/sub/' + id)
                .then(function (data) {
                    $rootScope.descriptionSub = $sce.trustAsHtml(data.data.descriptionPl);
                });
        };



    });