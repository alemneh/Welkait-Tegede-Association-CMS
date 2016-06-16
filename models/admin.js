'use strict';
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

module.exports = function(mongoose, models) {
  let Schema = mongoose.Schema;
  const adminSchema = new mongoose.Schema({
    name: String,
    password: String,
    activity: [{type: Schema.Types.ObjectId, ref:'Activity' }]
  });

  adminSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
  });

  //userSchema.methods.hashPassword
  adminSchema.methods.compareHash = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  adminSchema.methods.generateToken = function() {
    return jwt.sign({id: this._id}, 'GAME TIME');
  };


  let Admin = mongoose.model('Admin', adminSchema);
  models.Admin = Admin;

};
