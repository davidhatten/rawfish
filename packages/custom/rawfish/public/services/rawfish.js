'use strict';

angular.module('mean.rawfish').factory('Rawfish', [
    function() {
        var socket = io.connect("/");
        return {
            name: 'rawfish',
            on: function(eventName, callback) {
                socket.on(eventName, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function(eventName, data, callback) {
                socket.emit(eventName, data, function() {
                    console.log('event:', eventName);
                    var args = arguments;
                });
            }
        };
    }
]);
