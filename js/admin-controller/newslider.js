'use strict';

angular.module('szczesniakAdmin')
    .controller('NewSliderCtrl', function ($scope, $http) {

        $scope.slides = [];
        

        $http.get('http://localhost:3333/sliders')
            .then(function (data) {
                console.log(data.data);
                $scope.slides = data.data;
            });

        $scope.deleteSlide = function (id) {

            $http.delete('http://localhost:3333/sliderD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.addSlide = function (data) {

            $http.post('http://localhost:3333/slider',data)
                .then(function () {
                    console.log('dodano');

                });


        };

    });