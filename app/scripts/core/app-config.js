/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The application's configuration file.
 * @module app-config
 */

/**
 * app-config IIFE declaration.
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
    config.$inject = ['$logProvider', 'steamulateConstants'];

    /**
     * Provides all the configuration the application needs.
     * @name config
     * @param {Object} $logProvider The AngularJS $logProvider object
     * @param {Object} steamulateConstants The application's constants object
     * @function
     */
    function config($logProvider, steamulateConstants) {

        $logProvider.debugEnabled(steamulateConstants.DEBUG);

    }

})();
