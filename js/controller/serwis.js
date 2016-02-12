'use strict';

angular.module('szczesniak')
	.controller('SerwisCtrl', function($scope, $rootScope, $sce){
		console.log('Serwis');

$rootScope.podstrona = true;

		$rootScope.pokaztitle = $sce.trustAsHtml("<strong>Serwis</strong>");
		$rootScope.description = $sce.trustAsHtml("szybki serwis");
	});