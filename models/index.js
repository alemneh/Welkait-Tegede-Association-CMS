'use strict';
let mongoose = require('mongoose');
mongoose.connect('mongodb://alemneh:gondar@ds027215.mlab.com:27215/welkait-tegede-cms');
let models = {};

require('./user')(mongoose, models);
require('./payment')(mongoose, models);
require('./activity')(mongoose, models);
require('./remittance')(mongoose, models);
require('./admin')(mongoose, models);

module.exports = models;
