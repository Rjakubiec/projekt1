'use strict';

angular.module('szczesniak')
    .controller('ProduktyCtrl', function ($scope, $rootScope, $sce) {
        console.log('Produkty');

        $rootScope.podstrona = true;
        if ($rootScope.lang == false) {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Produkty</strong>");
            $rootScope.description = $sce.trustAsHtml("super produkty");
        }
        else if ($rootScope.lang == true) {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Products</strong>");
            $rootScope.description = $sce.trustAsHtml("best products");
        }
    });