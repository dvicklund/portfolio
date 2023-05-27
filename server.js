var express = require('express')
var path = require('path')
var app = express()

app.use('/', express.static(path.join(__dirname, 'build')))

app.use('/projects/whereNotToWalkYourDog', express.static(path.join(__dirname, 'build/projects/whereNotToWalkYourDog')))

app.use('/projects/photons', express.static(path.join(__dirname, 'build/projects/photons')))

var port = process.env.PORT || 3000

app.listen(port, function() {
	console.log('server up on port: ' + port);
})
