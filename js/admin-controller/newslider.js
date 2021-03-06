'use strict';

angular.module('szczesniakAdmin')
    .controller('NewSliderCtrl', function ($scope, $http,Upload,$window) {

        $scope.slides = [];
        

        $http.get('http://pszcz.projekty.surprise.design:3456/sliders')
            .then(function (data) {
               
                $scope.slides = data.data;
            });

        $scope.deleteSlide = function (id) {

            $http.delete('http://pszcz.projekty.surprise.design:3456/sliderD/' + id)
                .then(function () {
                    console.log('usunieto');
                    $window.location.reload();

                });
        };
        $scope.addSlide = function (data) {
            console.log(data);
            $http.post('http://pszcz.projekty.surprise.design:3456/slider',data)
                .then(function () {
                    console.log('dodano');
                    $window.location.reload();

                });
        };
        $scope.updateSlide = function (id, data) {
            console.log(data);
            $http.put('http://pszcz.projekty.surprise.design:3456/sliderU/' + id, data)
                .then(function () {
                    console.log('update');

                });
        };
        
        
         var vm = this;
      $scope.uploadFiles = function (file,slider) {
        $scope.file = file;
        $scope.slider = slider;   
            console.log(file);
            console.log(slider);
            Upload.upload({
                url: 'http://pszcz.projekty.surprise.design:3456/slider',
                arrayKey: '',
                data: {
                    file: file,
                    slider: slider
                }
            }).then(function (resp) { //upload function returns a promise
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