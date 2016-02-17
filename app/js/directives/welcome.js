module.exports = function(app) {
	app.directive('welcome', function() {
		return {
			restrict: 'EC',
			templateUrl: 'templates/welcome.html',
		};
	});
};
