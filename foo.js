var express = require('express'),
    app = express.createServer();

app.use('/bar', require('./bar'));

app.get('/', function(req, res){
    res.send('Foo');
});

app.listen(3000);
