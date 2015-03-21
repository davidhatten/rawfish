'use strict';

angular.module('mean.rawfish').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('rawfish example page', {
      url: '/rawfish/example',
      templateUrl: 'rawfish/views/index.html'
    });
  }
]);
