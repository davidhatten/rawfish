'use strict';

// The Package is past automatically as first parameter
module.exports = function(MeanSocket, app, auth, database, io) {

    var _ = require('lodash');
    var moment = require('moment');
    //var mycontroller = require('../controllers/sockets');
    //var gameFactory = require('../controllers/gameFactory');

    var channelWatchList = [];

    io.on('connection', function(socket) {
        //var currentGame = gameFactory.getGame();

        console.log('Game - user connected');
        socket.emit("Welcome. Seriously.");

        /**
         * disconnect
         */
        socket.on('disconnect', function() {
            console.log('Game - user disconnected');
        });
    });
};
