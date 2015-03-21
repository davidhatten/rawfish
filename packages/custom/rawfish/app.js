'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Rawfish = new Module('rawfish');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Rawfish.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Rawfish.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Rawfish.menus.add({
    title: 'rawfish example page',
    link: 'rawfish example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  Rawfish.menus.add({
    title: 'Join the Game!',
    link: 'join game',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Rawfish.aggregateAsset('css', 'rawfish.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Rawfish.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Rawfish.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Rawfish.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Rawfish;
});
