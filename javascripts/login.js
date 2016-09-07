var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.listen(3000, function () {

console.log('Example app listening on port 3000!');
});