'use strict';

angular.module('mean.rawfish').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('rawfish example page', {
	      url: '/rawfish/example',
	      templateUrl: 'rawfish/views/index.html'
	    });
	$stateProvider.state('join game', {
    		url:'/rawfish/join',
    		templateUrl: 'rawfish/views/join.html'
    	});
    $stateProvider.state('play game', {
            url: '/rawfish/game',
            templateUrl: 'rawfish/views/game.html'
    });
  }
]);
