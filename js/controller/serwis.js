'use strict';

angular.module('szczesniak')
    .controller('SerwisCtrl', function ($scope, $rootScope, $sce) {
        console.log('Serwis');

        $rootScope.podstrona = true;
        if ($rootScope.lang == false) {


            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Serwis</strong>");
            $rootScope.description = $sce.trustAsHtml("szybki serwis");
        }
        else if ($rootScope.lang == true) {


            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Service</strong>");
            $rootScope.description = $sce.trustAsHtml("quick service");
        }
    });