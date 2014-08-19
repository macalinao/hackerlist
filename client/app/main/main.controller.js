'use strict';

angular.module('hackerlistApp')
  .controller('MainCtrl', function($scope, $location) {
    $scope.submit = function() {
      $location.path('/' + $scope.hackerSearch);
    };
  });
