'use strict';

angular.module('mean.rawfish').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
    	.state('rawfish example page', {
	      url: '/rawfish/example',
	      templateUrl: 'rawfish/views/index.html'
	    })
    	.state('join game', {
    		url:'/rawfish/join',
    		templateUrl: 'rawfish/views/join.html'
    	});
  }
]);
