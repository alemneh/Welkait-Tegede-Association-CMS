(function() {
  'use strict';

  module.exports = (app) => {
    app.controller('MemberController', ['$http', MemberController]);

    function MemberController($http) {
      let vm = this;
      let port = 'http://localhost:3000';

      //Main data
      vm.members = [];

      vm.getAllMembers = function() {
        $http.get(port + '/members')
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.getOneMember = function(member) {
        $http.get(port + '/members/' + member._id)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.createMember = function(newMember) {
        $http.get(port + '/members', newMember)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.updateMember = function(updatedMember) {
        $http.put(port + '/members/' + updatedMember._id, updatedMember)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.removeMember = function(member) {
        $http.delete(port + '/members/' + member._id)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };


    }
  };



})();
