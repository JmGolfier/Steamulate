/**
 * @author Damien GABRIELLE
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The AddPlayer controller's file.
 * @module AddPlayer
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
        .controller('AddPlayer', AddPlayer);

    // Dependency injection
    AddPlayer.$inject = ['$log', 'AddPlayerLogic'];

    /**
     * The AddPlayer controller aims to manage the AddPlayer view.
     * @name AddPlayer
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} AddPlayerLogic The AddPlayer controller's logic file
     * @function
     */
    function AddPlayer($log, AddPlayerLogic) {

        $log.debug('Loading AddPlayer Controller...');

        var vm = this;

        vm.steamID = null;
        vm.checkPlayer = checkPlayer;
        vm.goBack = goBack;

        return vm;

        /**
         * Check if the given player is valid
         * @name checkPlayer
         * @function
         */
        function checkPlayer() {
            AddPlayerLogic.checkPlayer(vm);
        }

        /**
         * Change the view to Home
         * @name goBack
         * @function
         */
        function goBack() {
            AddPlayerLogic.goBack();
        }

    }

})();