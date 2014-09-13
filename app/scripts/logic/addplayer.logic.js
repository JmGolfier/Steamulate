/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The AddPlayerLogic handler file.
 * @module AddPlayerLogic
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
        .service('AddPlayerLogic', AddPlayerLogic);

    // Dependency injection
    AddPlayerLogic.$inject = ['$location', 'Server'];

    /**
     * The Server factory manage the server requests.
     * @name Server
     * @param {Object} $location The $location handler object
     * @param {Object} Server The Server handler object
     * @return {Object} The factory
     * @function
     */
    function AddPlayerLogic($location, Server) {

        var factory =
        {
            goBack: goBack,
            checkPlayer: checkPlayer
        };

        return factory;

        /**
         * Check if the given player is valid
         * @name checkPlayer
         * @param {Object} scope The AddPlayer controller's scope
         * @function
         */
        function checkPlayer(scope) {
            function validPlayer(data) {
                console.info('Player verified:', data);
                scope.validPlayer = true;
                scope.player = data;
            }

            function invalidPlayer(data) {
                console.error('Invalid player:', data);
            }

            Server.checkPlayerMock(scope.steamID, validPlayer, invalidPlayer);
        }

        /**
         * Change the view to Home.
         * @name goBack
         * @function
         */
        function goBack() {

            $location.path('/');

        }

    }

})();