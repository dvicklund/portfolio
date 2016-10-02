module.exports = function(app) {
	// require('folder/controller')(app)
	require(__dirname + '/controllers/projectsController')(app)
	require(__dirname + '/controllers/headerController')(app)
	require(__dirname + '/controllers/welcomeController')(app)
};
