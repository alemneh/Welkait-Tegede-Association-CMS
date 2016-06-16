'use strict';

module.exports = (activityRouter, models) => {
  let Activity = models.Activity;
  let Admin = models.Admin;

  activityRouter.route('/activities')
    .get((req, res) => {
      Activity.find({}, (err, activities) => {
        if(err) throw err;
        res.json({
          data:activities
        });
      });
    })
    .post((req, res) => {
      var newActivity = new Activity(req.body);
      newActivity.save((err, activity) => {
        if(err) throw err;
        console.log(activity);
        Admin.findOne({name:activity._owner[0]}, (err, admin) => {
          admin.activity.push(activity._id);
          res.json({
            message: 'New activity logged!'
          });
        });
      });
    });
};
