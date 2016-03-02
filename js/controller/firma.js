'use strict';

angular.module('szczesniak').controller('FirmaCtrl', function ($scope, $rootScope, $http) {


    $rootScope.podstrona = false;
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [];
    $scope.news = [];
 
        $http.get('http://localhost:3333/sliders')
            .then(function (data) {
                console.log(data.data);
                $scope.slides = data.data;
            });
            
            //  $http.get('http://localhost:3333/news')
            //  .then(function (data) {
            //      console.log(data.data);
            //      $scope.news = data.data;
            //  });

       var slides = $scope.slides


        $scope.addSlide = function () {
            slides.push();
        };



        $scope.addSlide();


    });