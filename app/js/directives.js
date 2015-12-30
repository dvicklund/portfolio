module.exports = function(app) {
	require('./directives/headerDirective')(app);
	require('./directives/welcomeDirective')(app);
};