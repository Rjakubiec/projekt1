'use strict';

angular.module('szczesniak').controller('FirmaCtrl', function ($scope, $rootScope, $http,$sce) {


    $rootScope.podstrona = false;
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [];
    $scope.addons = [];

 
        $http.get('http://pszcz.projekty.surprise.design:3123/sliders')
            .then(function (data) {
                console.log(data.data);
                $scope.slides = data.data;
            });
            
        $http.get('http://pszcz.projekty.surprise.design:3123/addons')
            .then(function (data) {
                console.log(data.data);
                $scope.addons = data.data;
            });
            
           $scope.getSub = function (id) {              
               id='56d6c941290c07cc1b916542';
            $http.get('http://pszcz.projekty.surprise.design:3123/sub/' + id)
                .then(function (data) {
                    $rootScope.descriptionSub = $sce.trustAsHtml(data.data.descriptionPl);
                });
        };
            
            //  $http.get('http://pszcz.projekty.surprise.design:3123/news')
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