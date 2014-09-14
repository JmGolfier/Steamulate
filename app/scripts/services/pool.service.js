/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The Pool handler file.
 * @module Pool
 */

/**
 * Pool IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('steamulateApp')
        .service('Pool', Pool);


    /**
     * The Pool factory manage the registered players.
     * @name Pool
     * @return {Object} The factory
     * @function
     */
    function Pool() {

        var factory =
        {
            players: new Map(),
            clear: clear,
            getPlayer: getPlayer,
            addPlayer: addPlayer,
            hasPlayer: hasPlayer,
            getPlayers: getPlayers,
            removePlayer: removePlayer
        };

        return factory;

        /**
         * Remove the given player from the pool.
         * @name removePlayer
         * @param {String} steamID The player's steam ID
         * @function
         */
        function removePlayer(steamID) {

            factory.players.delete(steamID);

        }

        /**
         * Add the given player to the pool.
         * @name addPlayer
         * @param {String} steamID The player's steam ID
         * @param {Object} player The player's representation
         * @function
         */
        function addPlayer(steamID, player) {

            factory.players.set(steamID, player);

        }

        /**
         * Return the pool.
         * @name getPlayers
         * @function
         */
        function getPlayers() {

            return factory.players;

        }

        /**
         * Return the chosen player if it exists.
         * @name getPlayer
         * @param {String} steamID The player's steam ID
         * @function
         */
        function getPlayer(steamID) {

            return factory.players.get(steamID);

        }

        /**
         * Check if a player is already registered in the pool.
         * @name hasPlayer
         * @param {String} steamID The player's steam ID
         * @function
         */
        function hasPlayer(steamID) {

            return factory.players.has(steamID);

        }

        /**
         * Reset the pool.
         * @name clear
         * @function
         */
        function clear() {

            factory.players.clear();

        }

    }

})();