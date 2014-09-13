/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The application's run file.
 * @module app-run
 */

/**
 * app-run IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('steamulateApp')
        .run(run);

    // Dependency injection
//    run.$inject = [];

    /**
     * Provides the run configuration for the application.
     * @name run
     * @function
     */
    function run() {



    }

})();
