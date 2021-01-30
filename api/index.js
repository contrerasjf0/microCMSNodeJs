const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');

const app = express();

// ROUER
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log('The server is running on the port: ', config.api.port);
});