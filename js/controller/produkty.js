'use strict';

angular.module('szczesniak')
	.controller('ProduktyCtrl', function($scope, $rootScope, $sce){
		console.log('Produkty');

        $rootScope.podstrona = true;

		$rootScope.pokaztitle = $sce.trustAsHtml("<strong>Produkty</strong>");
		$rootScope.description = $sce.trustAsHtml("super produkty");

	});