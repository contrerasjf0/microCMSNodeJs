const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// ROUTER
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/post', post);

app.use(errors);

app.listen(config.api.port, () => {
    console.log('The server is running on the port: ', config.api.port);
});