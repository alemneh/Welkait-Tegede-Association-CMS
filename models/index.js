'use strict';
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
let models = {};

require('./user')(mongoose, models);
require('./payment')(mongoose, models);
require('./activity')(mongoose, models);
require('./remittance')(mongoose, models);
require('./admin')(mongoose, models);

module.exports = models;
