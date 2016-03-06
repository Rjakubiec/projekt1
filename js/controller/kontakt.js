'use strict';

angular.module('szczesniak')
    .controller('KontaktCtrl', function ($scope, $rootScope, $sce, $http) {
        console.log('Kontakt');
        $scope.kwiaty = [];
        

        $rootScope.podstrona = true;
        if ($rootScope.mainLanguage == 'PL') {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Kontakt</strong>");
            $rootScope.description = $sce.trustAsHtml("tutaj kontakt");
        }
        else {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Contact</strong>");
            $rootScope.description = $sce.trustAsHtml("contact here");

        }
        
        //formularz
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; 
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; 
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            console.log('test');
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { 
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Błąd <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Proszę wypełnij wszystkie pola.';
            $scope.result='bg-danger';
        }
    }
    
    //mapa
    
    $scope.map = {center: {latitude: 49.868201, longitude: 19.045582 }, zoom: 17 }
        $scope.options = {scrollwheel: false};
        $scope.marker = {
            coords: {
                latitude: 49.868201,
                longitude: 19.045582
            },
            show: false,
            id: 0
        };

        $scope.windowOptions = {
            visible: true
        };
                    

        $scope.title = "SZCZĘŚNIAK Pojazdy Specjalne Sp z o.o.";
        $scope.adress = "ul. Bestwińska 105A 43-346 Bielsko-Biała";
        $scope.phone = "tel: +48 33 827 3400 fax: +48 33 818 2614";
        $scope.nip = "NIP: 5472099801 REGON: 241073251";

    });