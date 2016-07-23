'use strict';

module.exports = function(mongoose, models) {
  let Schema = mongoose.Schema;
  const userSchema = new mongoose.Schema({
    name: String,
    admin: Boolean,
    dues: [{type: Schema.Types.ObjectId, ref:'Payment' }],
    role: String,
    committee: String,
    volunteer: Boolean,
    email: String,
    telephone: Number,
    street: String,
    city: String,
    state: String,
    zipCode: Number,
    plan: Number
  });


  let User = mongoose.model('User', userSchema);
  models.User = User;

};
