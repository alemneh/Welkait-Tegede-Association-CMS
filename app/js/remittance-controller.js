  'use strict';

  module.exports = (app) => {
    app.controller('RemittanceController', ['$http', function($http) {


      let vm = this;
      let port = 'http://localhost:3000';

      //Main data
      vm.remittances = [];

      vm.getAllRemittances = function() {
        $http.get(port + '/remittances')
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.getOneRemittance = function(remittance) {
        $http.get(port + '/remittances/' + remittance._id)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.createRemittance = function(newRemittance) {
        $http.get(port + '/remittances', newRemittance)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.updateRemittance = function(updatedRemittance) {
        $http.put(port + '/remittances/' + updatedRemittance._id, updatedRemittance)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.removeRemittance = function(remittance) {
        $http.delete(port + '/remittances/' + remittance._id)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };


    
    }]);
  };
