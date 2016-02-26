'use strict';

angular.module('szczesniak')
    .controller('ProduktyCtrl', function ($scope, $rootScope, $sce, $http, Lightbox,$document) {
        console.log('Produkty');
    
    
        ////////////////////////////////Wyszukiwanie    
        $scope.typs = [];
       
        $http.get('http://localhost:3333/typs')
            .then(function (data) {

                $scope.typs = data.data;
            })
        $scope.sizes = [];
        

        $http.get('http://localhost:3333/sizes')
            .then(function (data) {

                $scope.sizes = data.data;
            })
        $scope.categorys = [];


        $http.get('http://localhost:3333/categorys')
            .then(function (data) {

                $scope.categorys = data.data;
            })
        
        
        /////////////////////////////////////    
        
        $scope.products = [];
        $rootScope.productDetalis = [];

        $http.get('http://localhost:3333/products')
            .then(function (data) {
                console.log(data.data);
                $scope.products = data.data;
            });

        $scope.getProduct = function (id) {
            $http.get('http://localhost:3333/product/' + id)
                .then(function (data) {
                    $rootScope.productDetalis = data.data;
                    console.log($scope.productDetalis);
                });
        };

        $rootScope.podstrona = true;
        if ($rootScope.mainLanguage == 'PL') {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Produkty</strong>");
            $rootScope.description = $sce.trustAsHtml("super produkty");
        }
        else {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Products</strong>");
            $rootScope.description = $sce.trustAsHtml("best products");
        }


        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.products, index);

        };
                $scope.reset = function() {
    $scope.filter1 = 0;
    $scope.filter2 = 0;
    $scope.filter3 = 0;
};
$scope.reset2 = function() {
   
    $scope.filter2 = 0;
    $scope.filter3 = 0;
};
    
     
       
    });