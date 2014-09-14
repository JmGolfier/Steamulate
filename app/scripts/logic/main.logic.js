/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The MainLogic handler file.
 * @module MainLogic
 */

/**
 * MainLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('steamulateApp')
        .service('MainLogic', MainLogic);

    // Dependency injection
    MainLogic.$inject = ['Pool'];

    /**
     * The MainLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} Pool The Pool handler object
     * @return {Object} The factory
     * @function
     */
    function MainLogic(Pool) {

        var factory =
        {
            reset: reset,
            getRegisteredPlayersLabel: getRegisteredPlayersLabel
        };

        return factory;

        /**
         * Return the registered players label
         * @name getRegisteredPlayersLabel
         * @return {String} label
         * @function
         */
        function getRegisteredPlayersLabel() {
            var numberOfPlayers = Pool.getPlayers().size;

            if(numberOfPlayers > 1) {

                return 'Currently, there are ' + numberOfPlayers + ' players registered in the pool.';

            }

            else if(numberOfPlayers === 1) {

                return 'Currently, there is only one player registered in the pool.';

            }

            else {

                return 'Currently, there is no player registered in the pool.';

            }

        }

        /**
         * Reset the game
         * @name reset
         * @function
         */
        function reset() {
            return Pool.clear();
        }

    }

})();