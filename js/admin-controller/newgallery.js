'use strict';

angular.module('szczesniakAdmin')
    .controller('NewGalleryCtrl', function ($scope, $http, $window, Upload) {

        $scope.imgs = [];


        $http.get('http://localhost:3333/imgs')
            .then(function (data) {

                $scope.imgs = data.data;
            });


        $scope.typs = [];


        $http.get('http://localhost:3333/typs')
            .then(function (data) {

                $scope.typs = data.data;
            });



        $scope.deleteImg = function (id) {

            $http.delete('http://localhost:3333/imgD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.updateImg = function (id, data) {
            console.log(data);
            $http.put('http://localhost:3333/imgU/' + id, data)
                .then(function () {
                    console.log('update');

                });
        };

        var vm = this;
        vm.submit = function () { //function to call on form submit
            if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
                vm.upload(vm.file); //call upload function
            }
        }

        vm.upload = function (file) {
            console.log(file);
            Upload.upload({
                url: 'http://localhost:3333/img', //webAPI exposed to upload the file
                data: { file: file } //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if (resp.data.error_code === 0) { //validate success
                    $window.alert('Poprawnie dodano');
                } else {
                    $window.alert('Nie dodano');
                }
            }, function (resp) { //catch error
                console.log('Błąd: ' + resp.status);
                $window.alert('Błąd: ' + resp.status);
            }, function (evt) {
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('Postęp: ' + progressPercentage + '% ' + evt.config.data.file.name);
                vm.progress = 'Postęp: ' + progressPercentage + '% '; // capture upload progress
            });
        };

    });