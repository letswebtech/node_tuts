const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const adminRouter = require('./routes/admin');

const shopRouter = require('./routes/shop');

app.use('/', adminRouter);
app.use('/', shopRouter);

app.listen(3000);