'use strict';
let express = require('express');
let app = express();
let models = require('./models');
let bodyParser = require('body-parser');
let userRouter = express.Router();
let remittanceRouter = express.Router();
let paymentRouter = express.Router();
let activityRouter = express.Router();
let loginRouter = express.Router();
let adminRouter = express.Router();

app.use(bodyParser.json());

require('./routes/login-routes')(loginRouter, models);
require('./routes/admin-routes')(adminRouter, models);
require('./routes/user-routes')(userRouter, models);
require('./routes/payment-routes')(paymentRouter, models);
require('./routes/remittance-routes')(remittanceRouter, models);
require('./routes/activity-routes')(activityRouter, models);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type, authorization, token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});


app.use('/', paymentRouter, userRouter, remittanceRouter,
        loginRouter, adminRouter, activityRouter);



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
