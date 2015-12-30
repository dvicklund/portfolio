module.exports = function(app) {
	app.directive('welcome', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/welcome.html',
		};
	});
};