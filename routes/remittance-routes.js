'use strict';

module.exports = (remittanceRouter, models) => {
  let Remittance = models.Remittance;

  remittanceRouter.route('/remittance')
    .get((req, res) => {
      Remittance.find({}, (err, remittances) => {
        if(err) throw err;
        res.json({
          data:remittances
        });
      });
    })
    .post((req, res) => {
      var newRemittances = new Remittance(req.body);
      newRemittances.save((err, remittance) => {
        res.json({
          data:remittance
        });
      });
    });
};
