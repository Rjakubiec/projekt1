'use strict';

angular.module('szczesniak')
    .controller('GaleriaCtrl', function ($scope, $rootScope, $sce, Lightbox) {
        console.log('Galeria');

        $scope.fotos = [
            {
                // //chyba tak to powinno mniej wiecej wyglądać
                // 'id': '',
                // 'url': 'img/male/IMG_6297.jpg',
                // 'url2': 'img/P20150813_54.jpg',
                // 'name': '',
                // 'descriptionPL': '',
                // 'descriptionENG': '',
                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 1',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 2',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 3',
                'thumbUrl': 'img/male/IMG_6297.jpg'
            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 4',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 2',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 3',
                'thumbUrl': 'img/male/IMG_6297.jpg'
            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 4',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 2',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 3',
                'thumbUrl': 'img/male/IMG_6297.jpg'
            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 4',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 2',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 3',
                'thumbUrl': 'img/male/IMG_6297.jpg'
            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 4',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            },
            {

                'url': 'img/IMG_6297.jpg',
                'caption': 'Zdjęcie 5',
                'thumbUrl': 'img/male/IMG_6297.jpg'

            }
        ];

        $rootScope.podstrona = true;
        if ($rootScope.lang == false) {

            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Galeria</strong>");
            $rootScope.description = $sce.trustAsHtml("ładna galeria");
        }
        else if ($rootScope.lang == true) {

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