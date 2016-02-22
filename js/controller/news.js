'use strict';

angular.module('szczesniak')
    .controller('NewsCtrl', function ($scope, $rootScope, $sce, $http) {
        console.log('News');

        $scope.newss = [];

        $http.get('http://localhost:3333/newss')
            .then(function (data) {
                console.log(data.data);
                $scope.newss = data.data;
            });
        $scope.getNews = function (id) {
            $http.get('http://localhost:3333/news/' + id)
                .then(function (data) {
                    $rootScope.descriptionNews = $sce.trustAsHtml(data.data.descriptionPl);
                });
        };
    });