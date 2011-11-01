var express = require('express'),
    app = express.createServer();

app.get('/', function(req, res) {
    res.send('Bar');
});

module.exports = app;
