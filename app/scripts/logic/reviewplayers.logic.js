/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The ReviewPlayersLogic handler file.
 * @module ReviewPlayersLogic
 */

/**
 * Server IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('steamulateApp')
        .service('ReviewPlayersLogic', ReviewPlayersLogic);

    // Dependency injection
    ReviewPlayersLogic.$inject = ['$window', 'Pool'];

    /**
     * The ReviewPlayersLogic manage the ReviewPlayers controller.
     * @name ReviewPlayersLogic
     * @param {Object} $window The $window handler object
     * @param {Object} Pool The Pool handler object
     * @return {Object} The factory
     * @function
     */
    function ReviewPlayersLogic($window, Pool) {

        var factory =
        {
            goBack: goBack,
            getPlayers: getPlayers,
            removePlayer: removePlayer
        };

        return factory;

        /**
         * Change the view to previous page.
         * @name goBack
         * @function
         */
        function goBack() {

            $window.history.back();

        }

        /**
         * Return all player sin the pool.
         * @name getPlayers
         * @return {Object} The players in the pool
         * @function
         */
        function getPlayers() {

            var states =
            {
                0: 'Offline',
                1: 'Online',
                2: 'Busy',
                3: 'Away',
                4: 'Snooze',
                5: 'Looking to trade',
                6: 'Looking to play'
            };

            var players = Pool.getPlayers();

            for(var i = 0; i < players.length; ++i) {

                players[i].stateLabel = states[players[i].personastate];

            }

            return players;

        }

        /**
         * Remove the player from the pool.
         * @name removePlayer
         * @param {String} steamID The player's steamID
         * @function
         */
        function removePlayer(steamID) {

            Pool.removePlayer(steamID);

        }

    }

})();
