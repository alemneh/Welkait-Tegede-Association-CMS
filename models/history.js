'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  let historySchema = mongoose.Schema({
    _owner: [{type: String, ref: 'User'}],
    action: String,
    date: Date
  })
}
