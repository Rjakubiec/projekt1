'use strict';

angular.module('szczesniakAdmin')
    .controller('NewNewsCtrl', function ($scope, $rootScope, $http, Upload, $window) {

        $scope.newss = [];
        

        $http.get('http://pszcz.projekty.surprise.design:3123/newss')
            .then(function (data) {

                $scope.newss = data.data;


            });

        $scope.addNews = function (data) {
            data.descriptionPl = data.htmlVariablePl;
            data.descriptionEn = data.htmlVariableEn;
            console.log(data);
            $http.post('http://pszcz.projekty.surprise.design:3123/news', data)
                .then(function () {
                    console.log('dodano');

                });
        };
        
         $scope.getNews = function (id) {
            $http.get('http://pszcz.projekty.surprise.design:3123/news/' + id)
                .then(function (data) {
                    $rootScope.newsDetalis = data.data;
                    console.log($scope.newsDetalis);
                });
        }
        $scope.deleteNews = function (id) {

            $http.delete('http://pszcz.projekty.surprise.design:3123/newsD/' + id)
                .then(function () {
                    console.log('usunieto');

                });
        };
        $scope.updateNews = function (id, data) {

            $http.put('http://pszcz.projekty.surprise.design:3123/newsU/' + id, data)
                .then(function () {
                    console.log('update');

                });


        };


        var vm = this;


        $scope.uploadFiles = function (file, news) {
            news.descriptionPl = news.htmlVariablePl;
            news.descriptionEn = news.htmlVariableEn;
            $scope.file = file;
            $scope.news = news;
            console.log(file);
            console.log(news);
            Upload.upload({
                url: 'http://pszcz.projekty.surprise.design:3123/news',
                arrayKey: '',
                data: {
                    file: file,
                    news: news
                }
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

        $scope.custom = true;
        $scope.toggleCustom = function () {
            $scope.custom = $scope.custom === false ? true : false;
        };

        $scope.showmePLnew = true;
        $scope.showmePLn = function () {
            $scope.showmePLnew = $scope.showmePLnew === false ? true : false;
        };
        $scope.showmeENnew = true;
        $scope.showmeENn = function () {
            $scope.showmeENnew = $scope.showmeENnew === false ? true : false;
        };
        $scope.showmePL = true;
        $scope.showmePL1 = function () {
            $scope.showmePL = $scope.showmePL === false ? true : false;
        };
        $scope.showmeEN = true;
        $scope.showmeEN1 = function () {
            $scope.showmeEN = $scope.showmeEN === false ? true : false;
        };


    });