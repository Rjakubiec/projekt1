'use strict';

angular.module('szczesniak').controller('FirmaCtrl', function ($scope, $rootScope, $http,$sce) {


    $rootScope.podstrona = false;
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [];
    $scope.addons = [];
    $scope.subs = [];

 
         $http.get('http://pszcz.projekty.surprise.design:3456/subs')
            .then(function (data) {
                console.log(data.data);
                $scope.subs = data.data;
            });
 
 
        $http.get('http://pszcz.projekty.surprise.design:3456/sliders')
            .then(function (data) {
                console.log(data.data);
                $scope.slides = data.data;
            });
            
        $http.get('http://pszcz.projekty.surprise.design:3456/addons')
            .then(function (data) {
                console.log(data.data);
                $scope.addons = data.data;
            });
            
           $scope.getSub = function (id) {              
               id='56d6c941290c07cc1b916542';
            $http.get('http://pszcz.projekty.surprise.design:3456/sub/' + id)
                .then(function (data) {
                    $rootScope.descriptionSub = $sce.trustAsHtml(data.data.descriptionPl);
                });
        };
            
            //  $http.get('http://pszcz.projekty.surprise.design:3456/news')
            //  .then(function (data) {
            //      console.log(data.data);
            //      $scope.news = data.data;
            //  });

       var slides = $scope.slides


        $scope.addSlide = function () {
            slides.push();
        };



        $scope.addSlide();


    }).filter('spaceless',function() {
    return function(input) {
        if (input) {
            input=input.replace(/\s+/g, '_');
            input=input.replace(/ą/ig, 'a');
            input=input.replace(/Ą/ig, 'A');
            input=input.replace(/Ę/ig, 'E');
            input=input.replace(/ę/ig, 'e');
            input=input.replace(/ć/ig, 'c');
            input=input.replace(/Ć/ig, 'C');
            input=input.replace(/Ś/ig, 'S');
            input=input.replace(/ś/ig, 's');
            input=input.replace(/ł/ig, 'l');
            input=input.replace(/Ł/ig, 'L');
            input=input.replace(/Ń/ig, 'Ń');
            input=input.replace(/ń/ig, 'n');
            input=input.replace(/Ó/ig, 'O');
            input=input.replace(/ó/ig, 'o');
            input=input.replace(/Ż/ig, 'Z');
            input=input.replace(/ż/ig, 'z');
            input=input.replace(/ź/ig, 'z');
            input=input.replace(/Ź/ig, 'Z');
            input=input.replace(/\[.*?\]/g,'')
            input=input.replace("\\]", '_');
            
            
            return input;     
        }
    }});;;