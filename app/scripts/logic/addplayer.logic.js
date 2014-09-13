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
    AddPlayerLogic.$inject = ['$location', 'Server', 'Pool'];

    /**
     * The Server factory manage the server requests.
     * @name Server
     * @param {Object} $location The $location handler object
     * @param {Object} Server The Server handler object
     * @param {Object} Pool The Pool handler object
     * @return {Object} The factory
     * @function
     */
    function AddPlayerLogic($location, Server, Pool) {

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

            scope.playerAlreadyExists = false;

            console.log(Pool.hasPlayer(scope.steamID));

            if (!Pool.hasPlayer(scope.steamID)) {

                scope.requesting = true;

                var validPlayer = function (data) {
                    console.info('Player verified:', data);
                    scope.requesting = false;
                    scope.validPlayer = true;
                    scope.player = data;
                    Pool.addPlayer(scope.steamID, data);
                    scope.applyChanges();
                };

                var invalidPlayer = function (data) {
                    console.error('Invalid player:', data);
                    scope.validPlayer = false;
                    scope.requesting = false;
                    scope.applyChanges();
                };

                Server.checkPlayerMock(scope.steamID, validPlayer, invalidPlayer);

            } else {

                scope.validPlayer = false;
                scope.playerAlreadyExists = true;
                scope.player = Pool.getPlayer(scope.steamID);

            }

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