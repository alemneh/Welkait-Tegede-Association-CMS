'use strict';

module.exports = (remittanceRouter, models) => {
  let Remittance = models.Remittance;

  remittanceRouter.route('/remittances')
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


  remittanceRouter.route('/remittances/:id')
    .get((req, res) => {
      Remittance.findById(req.params.id, (err, remittance) => {
        if(err) throw err;
        res.json({
          data:remittance
        });
      });
    })
    .put((req, res) => {
      Remittance.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if(err) throw err;
        res.json({
          message:'Remittance updated!'
        });
      });
    })
    .delete((req, res) => {
      Remittance.findById(req.params.id, (err, remittance) => {
        if(err) throw err;
        remittance.remove();
        res.json({
          message:'Remittance deleted!'
        });
      });
    });
};
