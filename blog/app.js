var express = require('express')
  , Resource = require('express-resource')
  , app = express();

app.resource(require('./mvc/controller'));
app.listen(3000);