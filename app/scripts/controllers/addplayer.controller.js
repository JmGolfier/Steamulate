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
    AddPlayer.$inject = ['$log', '$scope', 'AddPlayerLogic'];

    /**
     * The AddPlayer controller aims to manage the AddPlayer view.
     * @name AddPlayer
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $scope The AngularJS's $scope object
     * @param {Object} AddPlayerLogic The AddPlayer controller's logic file
     * @function
     */
    function AddPlayer($log, $scope, AddPlayerLogic) {

        $log.debug('Loading AddPlayer Controller...');

        var vm = this;

        vm.steamID = '76561198019819113';

        // Damien  : 76561198017678310
        // Raphael : 76561198019819113
        // Test    : 76561197960435530

        vm.goBack = goBack;
        vm.checkPlayer = checkPlayer;
        vm.isSteamIDOkToSubmit = isSteamIDOkToSubmit;

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

        /**
         * Check if the steamID field is set or not
         * @name isSteamIDOkToSubmit
         * @return {Boolean} The fact that the steamID is correctly set or not
         * @function
         */
        function isSteamIDOkToSubmit() {
            return vm.steamID && vm.steamID !== '';
        }

    }

})();
