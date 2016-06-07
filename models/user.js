'use strict';
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

module.exports = function(mongoose, models) {
  let Schema = mongoose.Schema;
  const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    admin: Boolean,
    dues: [{type: Schema.Types.ObjectId, ref:'Payment' }],
    role: String,
    committee: Boolean,
    volunteer: Boolean,
    email: String,
    telephone: Number
  });

  userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
  });

  //userSchema.methods.hashPassword
  userSchema.methods.compareHash = function(password) {
    return bcrypt.comareSync(password, this.password);
  };

  userSchema.methods.generateToken = function() {
    return jwt.sign({id: this._id}, 'GAME TIME');
  };

  let User = mongoose.model('User', userSchema);
  models.User = User;

};
