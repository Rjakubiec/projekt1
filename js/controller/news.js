'use strict';

angular.module('szczesniak')
    .controller('NewsCtrl', function ($scope, $rootScope, $sce, $http,$location) {
        console.log('News');
        
        
        console.log($location.path());
        
        if ($location.path()=='/') {
            $rootScope.podstrona = false;
        }
        else{      
        $rootScope.podstrona = true;
        }
        
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
            
            return input;     
        }
    }});