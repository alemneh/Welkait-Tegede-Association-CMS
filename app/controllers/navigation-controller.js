(function() {
  'use strict';

  module.exports = (app) => {
    app.controller('NavigationController', ['$http', NavigationController]);

    function NavigationController($http) {
      let vm = this;
      let port = 'http://localhost:3000';

      //Main data
      vm.members = [];

      vm.signIn = function() {
        $http.get(port + '/login')
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.signOut = function(member) {
        $http.get(port + '/members/' + member._id)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };



    }
  };


})();
