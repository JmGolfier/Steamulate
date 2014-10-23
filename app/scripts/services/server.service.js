/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The Server handler file.
 * @module Server
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
        .service('Server', Server);

    // Dependency injection
    Server.$inject = ['$http'];

    /**
     * The Server factory manage the server requests.
     * @name Server
     * @param {Object} $http The http handler object
     * @return {Object} The factory
     * @function
     */
    function Server($http) {

        var factory =
        {
            requestOwnedGames: requestOwnedGames,
            requestOwnedGamesMock: requestOwnedGamesMock,
            checkPlayer: checkPlayer,
            baseURL: 'http://localhost:8080/'
        };

        return factory;

        /**
         * Request games owned by given player.
         * @name requestOwnedGames
         * @param {String} steamID The player's steam ID
         * @param {function} success The success callback
         * @param {function} error The error callback
         * @function
         */
        function requestOwnedGames(steamID, success, error) {

            return $http.get(factory.baseURL + 'GetPlayerSummaries/v0002?format=json&steamid=' +
            steamID +'&key=' + factory.key)
                .then(success)
                .catch(error);

        }

        /**
         * Mock games owned by given player.
         * @name requestOwnedGamesMock
         * @function
         */
        function requestOwnedGamesMock() {

            return {
                hello: 'motto'
            };

        }

        /**
         * Mock check player.
         * @name checkPlayer
         * @param {String} steamID The player's steamID to check
         * @param {Function} success The success callback
         * @param {Function} error The error callback
         * @function
         */
        function checkPlayer(steamID, success, error) {

            factory.error = error;
            factory.success = success;

            return $http.get(factory.baseURL + 'user/' + steamID)
                .then(success)
                .catch(error);

        }

    }

})();
