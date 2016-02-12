'use strict';

angular.module('szczesniak').controller('FirmaCtrl', function ($scope, $rootScope) {
    $rootScope.podstrona = false;
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];



    $scope.addSlide = function () {


        slides.push(
            {
                image: "img/DSC0729_1.jpg",
                text: ""
            },
            {
                image: "img/IMG_6297.jpg",
                text: ""
            },
            {
                image: "img/P20150813_54.jpg",
                text: ""
            });
    };



    $scope.addSlide();


});