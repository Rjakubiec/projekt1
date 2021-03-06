'use strict';

angular.module('szczesniak')
    .controller('GaleriaCtrl', function ($scope, $rootScope, $sce, $http) {
        console.log('Galeria');
        
         
           $scope.typs= [];
        

        $http.get('http://pszcz.projekty.surprise.design:3456/typs')
            .then(function (data) {

                $scope.typs = data.data;
            })

        $scope.fotos = [
         
           
        ];

        $http.get('http://pszcz.projekty.surprise.design:3456/imgs')
            .then(function (data) {
                console.log(data.data);
                $scope.fotos = data.data;
            });

        $rootScope.podstrona = true;
        if ($rootScope.mainLanguage == 'PL') {

            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Galeria</strong>");
            $rootScope.description = $sce.trustAsHtml("ładna galeria");
        }
        else {

            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Gallery</strong>");
            $rootScope.description = $sce.trustAsHtml("nice gallery");
        }
        


    });