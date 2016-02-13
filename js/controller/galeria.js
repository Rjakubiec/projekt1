'use strict';

angular.module('szczesniak')
    .controller('GaleriaCtrl', function ($scope, $rootScope, $sce) {
        console.log('Galeria');
        $rootScope.podstrona = true;
        if ($rootScope.lang == false) {

            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Galeria</strong>");
            $rootScope.description = $sce.trustAsHtml("ładna galeria");
        }
        else if ($rootScope.lang == true) {

            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Gallery</strong>");
            $rootScope.description = $sce.trustAsHtml("nice gallery");
        }
    });