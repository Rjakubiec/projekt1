'use strict';

angular.module('szczesniak').controller('LangCtrl', function ($scope, $rootScope) {
    
    $scope.PL = function () {
        
         $rootScope.lang = false;
    }
     $scope.ENG = function () {
         
         $rootScope.lang = true;
    }
});   