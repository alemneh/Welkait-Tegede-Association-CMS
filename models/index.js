'use strict';
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/welkiat');
let models = {};

require('./user')(mongoose, models);
require('./payment')(mongoose, models);
require('./activity')(mongoose, models);
require('./remittance')(mongoose, models);
require('./admin')(mongoose, models);

module.exports = models;
