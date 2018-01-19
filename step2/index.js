const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World, I am step 2');
});

module.exports.handler = serverless(app);
