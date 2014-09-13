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
            error: null,
            success: null,
            requestOwnedGames: requestOwnedGames,
            requestOwnedGamesMock: requestOwnedGamesMock,
            checkPlayerMock: checkPlayerMock,
            baseURL: 'http://api.steampowered.com/IPlayerService/',
            key: 'XXXXXXXXXXXXXXXXX'
        };

        return factory;

        /**
         * Request games owned by given player.
         * @name requestOwnedGames
         * @param {Object} steamID The player's steam ID
         * @param {function} success The success callback
         * @param {function} error The error callback
         * @function
         */
        function requestOwnedGames(steamID, success, error) {

            factory.error = error;
            factory.success = success;

            return $http.get(factory.baseURL + 'GetOwnedGames/v0001', {steamid: steamID, key: factory.key})
                .then(requestSuccess)
                .catch(requestError);

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
        function checkPlayerMock(steamID, success, error) {

            success({personaname: 'adrael_boy', personastate: 1});

        }

        /**
         * Request data to server.
         * @name requestSuccess
         * @param {Object} response The request's response object
         * @function
         */
        function requestSuccess(response) {

            console.info('Request success:', factory.data.service, response.data.result);

            if (response.data.result.errorId !== 0) {

                console.error('Error #' + response.data.result.errorId + ':', response.data.result.errorText);

            } else {

                factory.success(response.data.result);

            }

            reset();

        }

        /**
         * Callback for failed requests.
         * @name requestError
         * @param {Object} error The request's error object
         * @function
         */
        function requestError(error) {

            console.error('Request failed: ' + factory.data.service + ' - ' + error.message);
            factory.error(error);
            reset();

        }

        /**
         * Reset the server data.
         * @name reset
         * @function
         */
        function reset() {

            factory.data = null;
            factory.error = null;
            factory.success = null;

        }

    }

})();