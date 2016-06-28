(function() {
  'use strict';

  module.exports = (app) => {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url:'/',
          templateUrl: 'views/home-view.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
        });
    }]);
  };



})();
