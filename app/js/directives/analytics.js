module.exports = function(app) {
	app.directive('analytics', function() {
		return {
			restrict: 'C',
      replace: true,
			templateUrl: 'templates/analytics.html',
		};
	});
};
