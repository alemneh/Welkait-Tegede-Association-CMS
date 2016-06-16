'use strict';

module.exports = (paymentRouter, models) => {
  let Payment = models.Payment;
  let User = models.User;

  paymentRouter.route('/payments')
    .get((req, res) => {
      Payment.find({}, (err, payments) => {
        if(err) throw err;
        res.json({
          data: payments
        });
      });
    })
    .post((req, res) => {
      var newPayment = new Payment(req.body);
      // newPayment.date = new Date.getTime();
      console.log(newPayment);
      newPayment.save();
      User.findById(req.body.id, (err, user) => {
        if(err) throw err;
        user.dues.push(newPayment._id);
        user.save();
        res.json({message: 'Payment Posted!'});
      });
    });

  paymentRouter.route('/payments/:id')
    .get((req, res) => {
      Payment.findById(req.params.id, (err, payment) => {
        if(err) throw err;
        res.json({data:payment});
      });
    })
    .put((req, res) => {
      Payment.findByIdAndUpdate(req.params.id, req.body, (err, payment) => {
        if(err) throw err;
        res.json({
          message:'Payment updated!'
        });
      });
    })
    .delete((req, res) => {
      User.findById(req.body.id, (err, user) => {
        if(err) throw err;
        user.dues.pull(req.params.id);
        user.save();
        Payment.findById(req.params.id, (err, payment) => {
          if(err) throw err;
          payment.remove();
          res.json({
            message: 'Payment Deleted!'
          });
        })
      });
    });
};
