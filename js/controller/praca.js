'use strict';

angular.module('szczesniak')
    .controller('PracaCtrl', function ($scope, $rootScope, $sce) {
        console.log('Praca');

        $rootScope.podstrona = true;
        if ($rootScope.lang == false) {


            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Praca</strong>");
            $rootScope.description = $sce.trustAsHtml("najlepsza praca");
        }
        else if ($rootScope.lang == true) {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Job</strong>");
            $rootScope.description = $sce.trustAsHtml("best job");
        }


    });