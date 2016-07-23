module.exports = function(app) {

  app.directive('navBar', function() {
    return {
      return: 'E',
      templateUrl: './views/nav-view.html',
      controller: 'NavController',
      controllerAs: 'navCtrl'
    };
  });

};
