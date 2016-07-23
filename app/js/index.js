(function() {
  'use strict';
  require('angular');

  const app = angular.module('WelkiatCMS', ['ngRoute']);
    // ROUTES
  require('./app.routes')(app);

    // DIRECTIVES
  require('./nav-directive')(app);

    // SERVICES
  require('./auth-service')(app);

   // CONTROLLERS
  require('./navigation-controller')(app);
  require('./member-controller')(app);
})();
