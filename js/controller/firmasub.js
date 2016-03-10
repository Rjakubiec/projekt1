'use strict';

angular.module('szczesniak').controller('FirmaSubCtrl', function ($scope, $rootScope, $http,$sce,$location) {



    $scope.subs = [];
    $scope.subDetalis = [];
    
      console.log($location.path());
           
        if ($location.path()=='/') {
            $rootScope.podstrona = false;
        }
        else{      
        $rootScope.podstrona = true;
        }
        
 
  $rootScope.hash = $location.hash();
 
        $http.get('http://pszcz.projekty.surprise.design:3123/subs')
            .then(function (data) {
                console.log(data.data);
                $scope.subs = data.data;
            });
             $scope.getSub = function (id) {
            $http.get('http://pszcz.projekty.surprise.design:3123/sub/' + $rootScope.hash)
                .then(function (data) {
                    $rootScope.descriptionSub = $sce.trustAsHtml(data.data.descriptionPl);
                });
        };
        
        console.log($location.hash());
        if ($scope.hash =='') {
            
        }
        else{      
        $scope.getSub();
        }
        



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
    }});;