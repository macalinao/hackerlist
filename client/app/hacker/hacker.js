'use strict';

angular.module('hackerlistApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hacker', {
        url: '/:hacker',
        templateUrl: 'app/hacker/hacker.html',
        controller: 'HackerCtrl'
      });
  });
