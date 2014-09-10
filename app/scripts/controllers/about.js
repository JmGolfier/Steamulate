'use strict';

/**
 * @ngdoc function
 * @name steamulateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the steamulateApp
 */
angular.module('steamulateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
