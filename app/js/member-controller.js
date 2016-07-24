  'use strict';

  module.exports = (app) => {
    app.controller('MemberController', ['$http', '$location', '$window',
    function($http, $location, $window) {


      let vm = this;
      let port = 'https://welkait-tegede.herokuapp.com';
      // let port = 'http://localhost:3000';


      //Main data
      vm.members = [];
      vm.getMemberInfo = function() {
        vm.memberInfo = JSON.parse($window.localStorage.member);
      };


      vm.getAllMembers = function() {
        $http.get(port + '/members')
          .then((res) => {
            console.log(res);
            vm.members = res.data.data;
          }, (err) => console.log(err));
      };

      vm.getOneMember = function(member) {
        $window.localStorage.member = JSON.stringify(member);
        console.log($window.localStorage.member);
        $location.path('/members/info');

      };

      vm.createMember = function(newMember) {
        $http.post(port + '/members', newMember)
          .then((res) => {
            console.log(res);
            $location.path('/members/view');
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
            $location.path('/members/view');
          }, (err) => console.log(err));
      };



    }]);
  };
