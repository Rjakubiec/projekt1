'use strict';

angular.module('szczesniak')
    .controller('SerwisCtrl', function ($scope, $rootScope, $sce,$http) {
        console.log('Serwis');

        $rootScope.podstrona = true;
         if ($rootScope.mainLanguage == 'PL') {


            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Serwis</strong>");
            $rootScope.description = $sce.trustAsHtml("szybki serwis");
        }
        else  {


            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Service</strong>");
            $rootScope.description = $sce.trustAsHtml("quick service");
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
                url     : 'contact-formSerwis.php',
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