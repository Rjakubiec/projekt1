'use strict';

angular.module('szczesniak')
    .controller('GaleriaCtrl', function ($scope, $rootScope, $sce, Lightbox, $http) {
        console.log('Galeria');

        $scope.fotos = [
            //             {
            //                 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 1',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 2',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 3',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 4',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 2',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 3',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 4',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 2',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 3',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 4',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 2',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 3',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 4',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             },
            //             {
            // 
            //                 'url': 'img/IMG_6297.jpg',
            //                 'caption': 'Zdjęcie 5',
            //                 'thumbUrl': 'img/male/IMG_6297.jpg'
            // 
            //             }
        ];

        $http.get('http://localhost:3333/imgs')
            .then(function (data) {
                console.log(data.data);
                $scope.fotos = data.data;
            });

        $rootScope.podstrona = true;
        if ($rootScope.mainLanguage == 'PL') {

            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Galeria</strong>");
            $rootScope.description = $sce.trustAsHtml("ładna galeria");
        }
        else {

            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Gallery</strong>");
            $rootScope.description = $sce.trustAsHtml("nice gallery");
        }
        
        //         $scope.pobrano = false;		
        // 			$http.get('')
        // 			.success(function(data) {
        // 				$scope.fotos = data;
        // 				$scope.pobrano= true;
        // 
        // 			});

        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.fotos, index);
        };


    });