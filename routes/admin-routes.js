'use strict';

module.exports = (adminRouter, models) => {
  let Admin = models.Admin;

  adminRouter.route('/admin')
    .get((req, res) => {
      Admin.find({}, (err, admins) => {
        if(err) throw err;
        res.json({
          data:admins
        });
      });
    })
    .post((req, res) => {
      var newAdmin = new Admin(req.body);
      newAdmin.save((err, admin) => {
        if(err) {
          res.json(err.toString());
        }
        else {
          res.json({
            message: 'New admin created!'
          });
        }
      });
    })
}
