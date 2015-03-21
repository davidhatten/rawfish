'use strict';

/* jshint -W098 */
angular.module('mean.rawfish').controller('RawfishController', ['$scope', 'Global', 'Rawfish',
  function($scope, Global, Rawfish) {
    $scope.global = Global;
    $scope.package = {
      name: 'rawfish'
    };
  }
]);
