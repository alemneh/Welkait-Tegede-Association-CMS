'use strict';
let express = require('express');
let app = express();
let models = require('./models');
let bodyParser = require('body-parser');
let userRouter = express();
let remittanceRouter = express();
let paymentRouter = express();
let historyRouter = express();

app.use(bodyParser.json());

require('./routes/user-routes')(userRouter, models);
require('./routes/payment-routes')(paymentRouter, models);
require('./routes/remittance-routes')(remittanceRouter, models);

app.use('/', paymentRouter, userRouter, remittanceRouter);



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
