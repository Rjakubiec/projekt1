'use strict';

angular.module('szczesniakAdmin')
    .controller('NewProductsCtrl', function ($scope, $rootScope, $http, $window, Upload,$timeout) {




        $scope.products = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/products')
            .then(function (data) {

                $scope.products = data.data;
            });

        /////parametry porduktu//////////////////////
        $scope.typs = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/typs')
            .then(function (data) {

                $scope.typs = data.data;
            });

        $scope.categorys = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/categorys')
            .then(function (data) {

                $scope.categorys = data.data;
            });

        $scope.sizes = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/sizes')
            .then(function (data) {

                $scope.sizes = data.data;
            });

        //////////////////////////////////////////////

        $scope.deleteProduct = function (id) {

            $http.delete('http://pszcz.projekty.surprise.design:3123/productD/' + id)
                .then(function () {
                    console.log('usunieto');
                    $window.location.reload();

                });
        };
        $scope.updateProduct = function (id, data) {
            console.log(data);
            $http.put('http://pszcz.projekty.surprise.design:3123/productU/' + id, data)
                .then(function () {
                    console.log('update');

                });
        };
        
           var vm = this;
       
    $scope.uploadFiles = function (pdf,files,product) {
        $scope.pdf = pdf;
        $scope.files = files;
        $scope.product = product;
        if (files && files.length) {
            Upload.upload({
                url: 'http://pszcz.projekty.surprise.design:3123/product',
                arrayKey: '',
                data: {
                    pdf: pdf,
                    files: files,
                    product: product
                }
            }).then(function (resp) { 
                console.log(resp);//upload function returns a promise
                if (resp.data.error_code === 0) { //validate success
                    $window.alert('Poprawnie dodano');
                    $window.location.reload();
                } else {
                    $window.alert('Nie dodano');
                }
            }, function (resp) { //catch error
                console.log('Błąd: ' + resp.status);
                $window.alert('Błąd: ' + resp.status);
            }, function (evt) {
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
               // console.log('Postęp: ' + progressPercentage + '% ' + evt.config.data.file.name);
                //vm.progress = 'Postęp: ' + progressPercentage + '% '; // capture upload progress
            });
        }
    };
    
    
        $scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };


    });