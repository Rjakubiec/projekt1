'use strict';

angular.module('szczesniak')
    .controller('GaleriaCtrl', function ($scope, $rootScope, $sce) {
        console.log('Galeria');

        $rootScope.podstrona = true;

        $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Galeria</strong>");
        $rootScope.description = $sce.trustAsHtml("ładna galeria");

    });