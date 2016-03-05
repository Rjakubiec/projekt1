'use strict';

angular.module('szczesniak')
    .controller('ProduktyDCtrl', function ($scope, $rootScope, $sce, $http, Lightbox, $document, $location) {
        console.log('ProduktyD');
        
        $rootScope.podstrona = true;
        
        $rootScope.hash = $location.hash();
        
        $scope.products = [];
        $rootScope.productDetalis = [];

        $http.get('http://localhost:3333/products')
            .then(function (data) {
                console.log(data.data);
                $scope.products = data.data;
            });
            
        $scope.getProduct = function () {
            $http.get('http://localhost:3333/product/' + $rootScope.hash)
                .then(function (data) {
                    $rootScope.productDetalis = data.data;
                    console.log($scope.productDetalis);
                });
        };

        
        
        console.log($location.hash());
        if ($scope.hash =='') {
            
        }
        else{      
        $scope.getProduct();
        }



    });