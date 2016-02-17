'use strict';

angular.module('szczesniak')
    .controller('SerwisCtrl', function ($scope, $rootScope, $sce) {
        console.log('Serwis');

        $rootScope.podstrona = true;
         if ($rootScope.mainLanguage == 'PL') {


            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Serwis</strong>");
            $rootScope.description = $sce.trustAsHtml("szybki serwis");
        }
        else  {


            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Service</strong>");
            $rootScope.description = $sce.trustAsHtml("quick service");
        }
    });