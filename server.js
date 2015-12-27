var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

var port = process.env.port || 3000;

app.listen(port, function() {
	console.log('server up on port: ' + port);
})
