'use strict';

angular.module('szczesniakAdmin')
    .controller('NewGalleryCtrl', function ($scope, $http, $window, Upload) {

        $scope.imgs = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/imgs')
            .then(function (data) {

                $scope.imgs = data.data;
            });


        $scope.typs = [];


        $http.get('http://pszcz.projekty.surprise.design:3123/typs')
            .then(function (data) {

                $scope.typs = data.data;
            });



        $scope.deleteImg = function (id) {

            $http.delete('http://pszcz.projekty.surprise.design:3123/imgD/' + id)
                .then(function () {
                    console.log('usunieto');
                    $window.location.reload();

                });
        };
        $scope.updateImg = function (id, data) {
            console.log(data);
            $http.put('http://pszcz.projekty.surprise.design:3123/imgU/' + id, data)
                .then(function () {
                    console.log('update');

                });
        };

         var vm = this;
    
        
        $scope.uploadFiles = function (file,img) {
        $scope.file = file;
        $scope.img = img;   
            console.log(file);
            console.log(img);
            Upload.upload({
                url: 'http://pszcz.projekty.surprise.design:3123/img',
                arrayKey: '',
                data: {
                    file: file,
                    img: img
                }
            }).then(function (resp) {
                console.log(resp); //upload function returns a promise
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
                console.log('Postęp: ' + progressPercentage + '% ' + evt.config.data.file.name);
                vm.progress = 'Postęp: ' + progressPercentage + '% '; // capture upload progress
            });
        
    };
        
        
        
        
        
         $scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };

    });