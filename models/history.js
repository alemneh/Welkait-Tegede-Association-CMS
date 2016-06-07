'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  let historySchema = mongoose.Schema({
    name: String,
    action: String,
    date: Date
  })
}
