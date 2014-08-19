'use strict';

angular.module('hackerlistApp')
  .controller('HackerCtrl', function ($scope, $stateParams, $http) {
    $scope.hacker = {};
    $http.get('/api/hacker/' + $stateParams.hacker).then(function(data) {
      $scope.hacker = data.data;
    });
  });
