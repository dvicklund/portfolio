var express = require('express')
var path = require('path')
var app = express()

app.use('/', express.static(path.join(__dirname, 'build')))

app.use('/projects/whereNotToWalkYourDog', express.static(path.join(__dirname, 'build/projects/whereNotToWalkYourDog')))

app.use('/projects/photons', express.static(path.join(__dirname, 'build/projects/photons')))

app.use('/projects/gameOfLife', express.static(path.join(__dirname, 'build/projects/gameOfLife')))

app.use('/projects/tilesForDays', express.static(path.join(__dirname, 'build/projects/tilesForDays')))

app.use('/projects/tabs', express.static(path.join(__dirname, 'build/projects/tabs')))

var port = process.env.PORT || 3000

app.listen(port, function() {
	console.log('server up on port: ' + port);
})
