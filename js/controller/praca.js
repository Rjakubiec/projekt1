'use strict';

angular.module('szczesniak')
    .controller('PracaCtrl', function ($scope, $rootScope, $sce) {
        console.log('Praca');

        $rootScope.podstrona = true;
        if ($rootScope.lang == false) {


            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Praca</strong>");
            $rootScope.description = $sce.trustAsHtml("najlepsza praca");
        }
        else if ($rootScope.lang == true) {
            $rootScope.pokaztitle = $sce.trustAsHtml("<strong>Job</strong>");
            $rootScope.description = $sce.trustAsHtml("best job");
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
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }

    });