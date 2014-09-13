/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The application's routes configuration file.
 * @module app-route
 */

/**
 * route-config IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('steamulateApp')
        .config(config);

    // Dependency injection
    config.$inject = ['$routeProvider'];

    /**
     * Provides all the routes the application needs.
     * @name config
     * @param {Object} $routeProvider The AngularJS $routeProvider object
     * @function
     */
    function config($routeProvider) {

        $routeProvider
            .when('/', {

                templateUrl: 'views/main.html',
                controller: 'Main',
                controllerAs: 'main'

            })

            .when('/addplayer', {

                templateUrl: 'views/addplayer.html',
                controller: 'AddPlayer',
                controllerAs: 'addplayer'

            })

            .otherwise({
                redirectTo: '/'
            });

    }

})();
