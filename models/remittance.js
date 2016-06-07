'use strict';
module.exports = (mongoose, models) => {
  let remittanceSchema = mongoose.Schema({
    beneficiary: String,
    agent: String,
    amount:Number,
    location: String,
    date: Date
  })
  let Remittance = mongoose.model('Remittance', remittanceSchema);
  models.Remittance = Remittance;
}
