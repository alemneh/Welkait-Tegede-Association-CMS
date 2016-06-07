'use strict';

module.exports = (mongoose, models) => {
  let paymentSchema = new mongoose.Schema({
    _owner: [{type: String, ref: 'User'}],
    amount: {type:Number, default: 0},
    date: Date
  });
  let Payment = mongoose.model('Payment', paymentSchema);
  models.Payment = Payment;
};
