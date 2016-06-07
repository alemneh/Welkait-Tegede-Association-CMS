'use strict';
let mongoose = require('mongoose');
mongoose.connect('mongod://localhost:27017/welkiat');
let models = {};

require('./user')(mongoose, models);
require('./payment')(mongoose, models);
require('./history')(mongoose, models);
require('./remittance')(mongoose, models);

module.exports = models;
