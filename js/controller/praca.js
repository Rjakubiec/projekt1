'use strict';

angular.module('szczesniak')
    .controller('PracaCtrl', function ($scope, $rootScope, $sce, $http) {
        console.log('Praca');

        $rootScope.podstrona = true;
        
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
           // console.log('test');
           // console.log($scope.formData.inputNumber);
            //console.log($scope.formData.inputFile);
            $http({
                method  : 'POST',
                url     : 'contact-formPraca.php',
                data    : $.param($scope.formData),  
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
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

    });