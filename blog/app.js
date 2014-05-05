var express = require('express')
  , Resource = require('express-resource')
  , app = express();

app.resource('/', require('./router/forum'));
app.listen(3000);