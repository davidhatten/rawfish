'use strict';

/* jshint -W098 */
angular.module('mean.rawfish').controller('RawfishController', ['$scope', '$location', 'Global', 'Rawfish',
  function($scope, $location, Global, Rawfish) {
    $scope.global = Global;
    $scope.lulz = [
      {title: 'player1', value: 'lololol'},
      {title: 'player2', value: 'lololololololo'}
    ];

    $scope.lulz.push({title: 'player3', value: 'the lulz of most'});

    $scope.package = {
      name: 'rawfish'
    };

    $scope.showJoin = function() {
    	alert("Oh hai, nice of you to join us.");
    };

    $scope.go = function(path) {
    	$location.path(path);
    };
  }
]);
