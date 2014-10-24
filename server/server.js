/**
 * @author Raphael MARQUES

 * @file The NodeJS Server file.
 * @module NodeJSServer
 */

(function () {

    'use strict';

    var vm = {};

    vm.KEY = 'E64F26B47642F30D404BBE8305787190';

    vm.restify = require('restify');
    vm.restify.CORS.ALLOW_HEADERS.push('authorization');

    vm.server = vm.restify.createServer(
        {
            name: 'Steamulate',
            version: '1.0.0'
        }
    );

    vm.server.use(vm.restify.bodyParser());
    vm.server.use(vm.restify.fullResponse());

    vm.client = vm.restify.createJsonClient(
        {
            url: 'http://api.steampowered.com/',
            version: '1.0.0'
        }
    );

    // GET Handlers
    vm.server.get('/user/:id', getUser);
    vm.server.get('/games/:id', getGamesForUser);
    vm.server.get('/stats/:id/:game', getStatsForGameOfUser);

    vm.server.listen(8080, serverListening);

    return vm;

    /**
     * Get a user from Steam.
     * @name getUser
     * @param {Object} reqS The request object
     * @param {Object} resS The response object
     * @param {Object} next The iterator for the next request
     * @function
     */
    function getUser(reqS, resS, next) {

        vm.client.get(

            vm.client.url.href + 'ISteamUser/GetPlayerSummaries/v0002?key=' + vm.KEY + '&steamids=' + reqS.params.id,

            function (err, reqC, resC, obj) {

                if(err) {

                    resS.send(
                        err.statusCode,

                        {
                            message: err.message
                        }
                    );

                    return;

                }

                resS.send(200, obj.response.players[0]);

            }

        );

        return next();
    }

    /**
     * Get a user's games list from Steam.
     * @name getGamesForUser
     * @param {Object} reqS The request object
     * @param {Object} resS The response object
     * @param {Object} next The iterator for the next request
     * @function
     */
    function getGamesForUser(reqS, resS, next) {

        vm.client.get(

            vm.client.url.href + 'IPlayerService/GetOwnedGames/v0001?key=' + vm.KEY + '&steamid=' + reqS.params.id,

            function (err, reqC, resC, obj) {

                if(err) {

                    resS.send(
                        err.statusCode,

                        {
                            message: err.message
                        }
                    );

                    return;

                }

                resS.send(200, obj.response);

            }

        );

        return next();
    }

    /**
     * Get the user's given game stats from Steam.
     * @name getStatsForGameOfUser
     * @param {Object} reqS The request object
     * @param {Object} resS The response object
     * @param {Object} next The iterator for the next request
     * @function
     */
    function getStatsForGameOfUser(reqS, resS, next) {

        vm.client.get(

            vm.client.url.href + 'ISteamUserStats/GetUserStatsForGame/v0002?key=' + vm.KEY +
            '&steamid=' + reqS.params.id + '&appid=' + reqS.params.game,

            function (err, reqC, resC, obj) {

                if(err) {

                    resS.send(
                        err.statusCode,

                        {
                            message: err.message
                        }
                    );

                    return;

                }

                resS.send(200, obj);

            }

        );

        return next();
    }

    /**
     * Actions to do when the server gets online.
     * @name serverListening
     * @function
     */
    function serverListening() {

        console.log('%s listening at %s', vm.server.name, vm.server.url);

    }

})();
