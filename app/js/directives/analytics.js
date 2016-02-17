module.exports = function(app) {
	app.directive('heading', function() {
		return {
			restrict: 'C',
      replace: true,
			templateUrl: 'templates/analytics.html',
		};
	});
};
