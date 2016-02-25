'use strict';

angular.module('szczesniakAdmin')
    .controller('NewPropertisCtrl', function ($scope, $rootScope, $http) {
        
        //////////////////////////////////types
        $scope.data = {
            singleSelect: null,
            typs: []
        };
        
         $scope.typs = [];
        

        $http.get('http://localhost:3333/typs')
            .then(function (data) {

                $scope.data.typs = data.data;
                $scope.typs = data.data;
            });


        $scope.deleteTyp = function (id) {
            console.log(id);
            $http.delete('http://localhost:3333/typD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.addTyp = function (data) {
            console.log(data);
            $http.post('http://localhost:3333/typ', data)
                .then(function () {
                    console.log('dodano');

                });


        };
        $scope.updateTyp = function (id, data) {

            $http.put('http://localhost:3333/typU/' + id, data)
                .then(function () {
                    console.log('update');

                });


        };   
        /////////////////////////////////sizes
        $scope.data = {
            singleSelect2: null,
            sizes: []
        };
        

        $http.get('http://localhost:3333/sizes')
            .then(function (data) {

                $scope.data.sizes = data.data;
            });

        $scope.deleteSize = function (id) {
            console.log(id);
            $http.delete('http://localhost:3333/sizeD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.addSize = function (data) {
            console.log(data);
            $http.post('http://localhost:3333/size', data)
                .then(function () {
                    console.log('dodano');

                });


        };
        $scope.updateSize = function (id, data) {

            $http.put('http://localhost:3333/sizeU/' + id, data)
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

        $http.get('http://localhost:3333/categorys')
            .then(function (data) {

                $scope.data.categorys = data.data;
                $scope.categorys = data.data;
            });

        $scope.deleteCategory = function (id) {
            console.log(id);
            $http.delete('http://localhost:3333/categoryD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.addCategory = function (data) {
            console.log(data);
            $http.post('http://localhost:3333/category', data)
                .then(function () {
                    console.log('dodano');

                });


        };
        $scope.updateCategory = function (id, data) {

            $http.put('http://localhost:3333/categoryU/' + id, data)
                .then(function () {
                    console.log('update');

                });


        };


    });