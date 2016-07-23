'use strict';

module.exports = function(app) {

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: './views/login-view.html'
    }).when('/home', {
      templateUrl: './views/admin-view.html',
      requireLogin: true
    }).when('/members', {
      templateUrl: './views/member-main-view.html',
      requireLogin: true
    }).when('/members/view', {
      templateUrl: './views/member-view.html',
      requireLogin: true
    }).when('/members/info', {
      templateUrl: './views/member-info-view.html',
      requireLogin: true
    }).when('/members/add', {
      templateUrl: './views/member-add-view.html',
      requireLogin: true
    }).when('/members/delete', {
      templateUrl: './views/member-delete-view.html',
      requireLogin: true
    }).when('/payments', {
      templateUrl: './views/payment-view.html',
      requireLogin: true
    }).when('/activity', {
      templateUrl: './views/activity-view.html',
      requireLogin: true
    }).when('/remittances', {
      templateUrl: './views/remittance-main-view.html',
      requireLogin: true
    }).when('/remittances/add', {
      templateUrl: './views/remittance-add-view.html',
      requireLogin: true
    }).when('/signup', {
      templateUrl: './views/signup.html',
      requireLogin: true
    }).when('/login', {
      templateUrl: '/views/login-view.html',
      requireLogin: true
    });
  }]);
};
