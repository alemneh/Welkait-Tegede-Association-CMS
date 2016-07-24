'use strict';

module.exports = function(app) {

  app.controller('NavController', ['AuthService', '$window', '$location', '$route',
  function(AuthService, $window, $location, $route) {
    let _this = this;
    _this.signedIn = false;
    _this.signedOut = true;
    if($window.localStorage.token) {
      _this.signedIn = true;
      _this.signedOut = false;
    }

    _this.signUp = function() {
      $location.path('/signup');
    };

    _this.signIn = function(user) {
      AuthService.signIn(user, (err, res) => {
        if(err) console.log(err);
        if(res.data.status == 'failure') {
          console.log(res.data.message);
        } else {
          _this.userId = $window.localStorage.id = res.data.data._id;
          _this.userName = $window.localStorage.name = res.data.data.name;
          _this.signedIn = true;
          _this.signedOut = false;
          $location.path('/home');

        }

      });
    };

    _this.signOut = function() {
      AuthService.signOut(() => {
        $window.localStorage.removeItem('name');
        $window.localStorage.removeItem('id');
        _this.signedIn = false;
        _this.signedOut = true;
        $location.path('/');
      });
    };
  }]);
};
