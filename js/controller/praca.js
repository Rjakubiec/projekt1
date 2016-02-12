'use strict';

angular.module('szczesniak')
	.controller('PracaCtrl', function($scope, $rootScope, $sce){
		console.log('Praca');

        $rootScope.podstrona = true;

		$rootScope.pokaztitle = $sce.trustAsHtml("<strong>Praca</strong>");
		$rootScope.description = $sce.trustAsHtml("najlepsza praca");

	});