'use strict';

angular.module('szczesniak')
    .controller('ProduktyCtrl', function ($scope, $rootScope, $sce, $http, Lightbox, $document, $location) {
        console.log('Produkty');


        $scope.hash = $location.hash();
        console.log($location.hash());
        if ($scope.hash == 'inne') {
            $scope.filter1 = 'Produkty inne'
        }
        else if ($scope.hash == 'wojskowe') {
            $scope.filter1 = 'Produkty wojskowe'
        }
        else if ($scope.hash == 'strazackie') {
            $scope.filter1 = 'Produkty strażackie'
        }
    
    
        ////////////////////////////////Wyszukiwanie    
        $scope.typs = [];

        $http.get('http://pszcz.projekty.surprise.design:3123/typs')
            .then(function (data) {

                $scope.typs = data.data;
            })
        $scope.sizes = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/sizes')
            .then(function (data) {

                $scope.sizes = data.data;
            })
        $scope.categorys = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/categorys')
            .then(function (data) {

                $scope.categorys = data.data;
            })
        
        
        /////////////////////////////////////    
        
        $scope.products = [];
        $rootScope.productDetalis = [];

        $http.get('http://pszcz.projekty.surprise.design:3123/products')
            .then(function (data) {
                console.log(data.data);
                $scope.products = data.data;
            });

        $scope.getProduct = function (id) {
            $http.get('http://pszcz.projekty.surprise.design:3123/product/' + id)
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
        $scope.reset = function () {
            $scope.filter1 = 0;
            $scope.filter2 = 0;
            $scope.filter3 = 0;
            $location.hash('');
            
        };
        $scope.reset2 = function () {

            $scope.filter2 = 0;
            $scope.filter3 = 0;
        };



    }).filter('spaceless',function() {
    return function(input) {
        if (input) {
            input=input.replace(/\s+/g, '_');
            input=input.replace(/ą/ig, 'a');
            input=input.replace(/Ą/ig, 'A');
            input=input.replace(/Ę/ig, 'E');
            input=input.replace(/ę/ig, 'e');
            input=input.replace(/ć/ig, 'c');
            input=input.replace(/Ć/ig, 'C');
            input=input.replace(/Ś/ig, 'S');
            input=input.replace(/ś/ig, 's');
            input=input.replace(/ł/ig, 'l');
            input=input.replace(/Ł/ig, 'L');
            input=input.replace(/Ń/ig, 'Ń');
            input=input.replace(/ń/ig, 'n');
            input=input.replace(/Ó/ig, 'O');
            input=input.replace(/ó/ig, 'o');
            input=input.replace(/Ż/ig, 'Z');
            input=input.replace(/ż/ig, 'z');
            input=input.replace(/ź/ig, 'z');
            input=input.replace(/Ź/ig, 'Z');
            input=input.replace(/\[.*?\]/g,'')
            input=input.replace("\\]", '_');
            
            
            return input;     
        }
    }});;