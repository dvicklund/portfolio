module.exports = function(app) {
	require('./directives/header')(app);
	require('./directives/welcome')(app);
	require('./directives/analytics')(app);
};
