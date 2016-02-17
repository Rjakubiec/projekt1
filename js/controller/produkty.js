'use strict';

angular.module('szczesniak')
    .controller('ProduktyCtrl', function ($scope, $rootScope, $sce,$http) {
        console.log('Produkty');
        
        $scope.products = [];

        //  $http.get('http://localhost:3333/products')
        //     .then(function (data) {
        //         console.log(data.data);
        //         $scope.products = data.data;
        //     });

        $rootScope.podstrona = true;
         if ($rootScope.mainLanguage == 'PL') {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Produkty</strong>");
            $rootScope.description = $sce.trustAsHtml("super produkty");
        }
        else  {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Products</strong>");
            $rootScope.description = $sce.trustAsHtml("best products");
        }
        
    });