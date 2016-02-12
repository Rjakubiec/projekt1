'use strict';

angular.module('szczesniak')
	.controller('KontaktCtrl', function($scope, $rootScope, $sce){
		console.log('Kontakt');

		$rootScope.podstrona = true;

		$rootScope.pokaztitle = $sce.trustAsHtml("<strong>Kontakt</strong>");
		$rootScope.description = $sce.trustAsHtml("tutaj kontakt");

		
	});