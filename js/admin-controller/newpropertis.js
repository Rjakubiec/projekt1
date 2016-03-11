'use strict';

angular.module('szczesniakAdmin')
    .controller('NewPropertisCtrl', function ($scope, $rootScope, $http,$window) {
        
        //////////////////////////////////types
        $scope.data = {
            singleSelect: null,
            typs: []
        };
        
         $scope.typs = [];
        

        $http.get('http://pszcz.projekty.surprise.design:3456/typs')
            .then(function (data) {

                $scope.data.typs = data.data;
                $scope.typs = data.data;
            });


        $scope.deleteTyp = function (id) {
            console.log(id);
            $http.delete('http://pszcz.projekty.surprise.design:3456/typD/' + id)
                .then(function () {
                    console.log('usunieto');
                    $window.location.reload();

                });
        };
        $scope.addTyp = function (data) {
            console.log(data);
            $http.post('http://pszcz.projekty.surprise.design:3456/typ', data)
                .then(function () {
                    console.log('dodano');
                    $window.location.reload();

                });


        };
        $scope.updateTyp = function (id, data) {

            $http.put('http://pszcz.projekty.surprise.design:3456/typU/' + id, data)
                .then(function () {
                    console.log('update');

                });


        };   
        /////////////////////////////////sizes
        $scope.data = {
            singleSelect2: null,
            sizes: []
        };
        

        $http.get('http://pszcz.projekty.surprise.design:3456/sizes')
            .then(function (data) {

                $scope.data.sizes = data.data;
            });

        $scope.deleteSize = function (id) {
            console.log(id);
            $http.delete('http://pszcz.projekty.surprise.design:3456/sizeD/' + id)
                .then(function () {
                    console.log('usunieto');
                    $window.location.reload();

                });
        };
        $scope.addSize = function (data) {
            console.log(data);
            $http.post('http://pszcz.projekty.surprise.design:3456/size', data)
                .then(function () {
                    console.log('dodano');
                    $window.location.reload();

                });


        };
        $scope.updateSize = function (id, data) {

            $http.put('http://pszcz.projekty.surprise.design:3456/sizeU/' + id, data)
                .then(function () {
                    console.log('update');

                });


        };
         /////////////////////////////////category
        $scope.data = {
            singleSelect3: null,
            categorys: []
        };
        
        $scope.categorys = [];

        $http.get('http://pszcz.projekty.surprise.design:3456/categorys')
            .then(function (data) {

                $scope.data.categorys = data.data;
                $scope.categorys = data.data;
            });

        $scope.deleteCategory = function (id) {
            console.log(id);
            $http.delete('http://pszcz.projekty.surprise.design:3456/categoryD/' + id)
                .then(function () {
                    console.log('usunieto');
                    $window.location.reload();

                });
        };
        $scope.addCategory = function (data) {
            console.log(data);
            $http.post('http://pszcz.projekty.surprise.design:3456/category', data)
                .then(function () {
                    console.log('dodano');
                    $window.location.reload();

                });


        };
        $scope.updateCategory = function (id, data) {

            $http.put('http://pszcz.projekty.surprise.design:3456/categoryU/' + id, data)
                .then(function () {
                    console.log('update');

                });


        };


    });