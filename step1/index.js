const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json({ strict: false }));

app.get('/', function (req, res) {
    const who = req.body;
    res.send("Hello, " + who + "!");
});

module.exports.handler = serverless(app);
