/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The Main controller's file.
 * @module Main
 */

/**
 * Main IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('steamulateApp')
        .controller('Main', Main);

    // Dependency injection
    Main.$inject = ['$log', '$location'];

    /**
     * The Main controller aims to manage the Application.
     * @name Main
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @function
     */
    function Main($log, $location) {

        $log.debug('Loading Main Controller...');

        var vm = this;

        vm.goToAddPlayer = goToAddPlayer;

        return vm;

        /**
         * Change the view to AddPlayer
         * @name goToAddPlayer
         * @function
         */
        function goToAddPlayer() {
            $location.path('/addplayer');
        }

    }

})();