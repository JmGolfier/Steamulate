/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The application's constants file.
 * @module app-constants
 */

/**
 * app-constants IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    /**
     * Provides all the constants the application needs.
     * @name constant
     * @var
     */
    var constants =
    {
        DEBUG: true
    };

    // Module declaration
    angular
        .module('steamulateApp')
        .constant('steamulateConstants', constants);

})();
