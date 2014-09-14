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
    Main.$inject = ['$log', '$location', 'MainLogic'];

    /**
     * The Main controller aims to manage the Application.
     * @name Main
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The MainLogic object
     * @function
     */
    function Main($log, $location, MainLogic) {

        $log.debug('Loading Main Controller...');

        var vm = this;

        vm.reset = reset;
        vm.goToAddPlayer = goToAddPlayer;
        vm.goToReviewPlayers = goToReviewPlayers;
        vm.getRegisteredPlayersLabel = getRegisteredPlayersLabel;

        return vm;

        /**
         * Change the view to AddPlayer
         * @name goToAddPlayer
         * @function
         */
        function goToAddPlayer() {
            $location.path('/addplayer');
        }

        /**
         * Change the view to ReviewPlayers
         * @name goToReviewPlayers
         * @function
         */
        function goToReviewPlayers() {
            $location.path('/reviewplayers');
        }

        /**
         * Return the registered players label
         * @name getRegisteredPlayersLabel
         * @return {String} label
         * @function
         */
        function getRegisteredPlayersLabel() {
            return MainLogic.getRegisteredPlayersLabel();
        }

        /**
         * Reset the game
         * @name reset
         * @function
         */
        function reset() {
            return MainLogic.reset();
        }

    }

})();