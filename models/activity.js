'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  let activitySchema = mongoose.Schema({
    _owner: [{type: String, ref: 'Admin'}],
    verb: String,
    object: [],
    date: Date
  });

  let Activity = mongoose.model('Activity', activitySchema);
  models.Activity = Activity;

};
