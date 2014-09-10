'use strict';

/**
 * @ngdoc function
 * @name steamulateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the steamulateApp
 */
angular.module('steamulateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
