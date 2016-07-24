  'use strict';

  module.exports = (app) => {
    app.controller('PaymentController', ['$http', function($http) {


      let vm = this;
      let port = 'http://localhost:3000';

      //Main data
      vm.payments = [];

      vm.getAllPayments = function() {
        $http.get(port + '/payments')
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.getOnePayment = function(payment) {
        $http.get(port + '/payments/' + payment._id)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.createPayment = function(newPayment) {
        $http.get(port + '/payments', newPayment)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.updatePayment = function(updatedPayment) {
        $http.put(port + '/payments/' + updatedPayment._id, updatedPayment)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };

      vm.removePayment = function(payment) {
        $http.delete(port + '/payments/' + payment._id)
          .then((res) => {
            console.log(res);
          }, (err) => console.log(err));
      };



    }]);
  };
