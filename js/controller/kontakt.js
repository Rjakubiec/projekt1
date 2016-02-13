'use strict';

angular.module('szczesniak')
    .controller('KontaktCtrl', function ($scope, $rootScope, $sce) {
        console.log('Kontakt');

        $rootScope.podstrona = true;
        if ($rootScope.lang == false) {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Kontakt</strong>");
            $rootScope.description = $sce.trustAsHtml("tutaj kontakt");
        }
        else if ($rootScope.lang == true) {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Contact</strong>");
            $rootScope.description = $sce.trustAsHtml("contact here");

        }

    });