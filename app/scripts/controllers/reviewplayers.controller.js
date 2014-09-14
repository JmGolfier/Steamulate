/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The ReviewPlayers controller's file.
 * @module ReviewPlayers
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
        .controller('ReviewPlayers', ReviewPlayers);

    // Dependency injection
    ReviewPlayers.$inject = ['$log', 'ReviewPlayersLogic'];

    /**
     * The ReviewPlayers controller aims to manage the ReviewPlayers page.
     * @name ReviewPlayers
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} ReviewPlayersLogic The ReviewPlayersLogic object
     * @function
     */
    function ReviewPlayers($log, ReviewPlayersLogic) {

        $log.debug('Loading ReviewPlayers Controller...');

        var vm = this;

        vm.goBack = goBack;
        vm.removePlayer = removePlayer;
        vm.players = ReviewPlayersLogic.getPlayers();

        return vm;

        /**
         * Change the view to previous page.
         * @name goBack
         * @function
         */
        function goBack() {

            ReviewPlayersLogic.goBack();

        }

        /**
         * Remove the player from the pool.
         * @name removePlayer
         * @param {String} steamID The player's steamID
         * @function
         */
        function removePlayer(steamID) {

            ReviewPlayersLogic.removePlayer(steamID);
            vm.players = ReviewPlayersLogic.getPlayers();

        }

    }

})();