'use strict';
let express = require('express');
let app = express();
let models = require('./models');
let bodyParser = require('body-parser');
let models = require('./models');
let userRouter = express();
let remittanceRouter = express();
let paymentRouter = express();
let historyRouter = express();

app.use(bodyParser.json());


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
