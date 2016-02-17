module.exports = function(app) {
	app.directive('heading', function() {
		return {
			restrict: 'C',
			templateUrl: 'templates/header.html',
			scope: {
				headingText: '='
			}
		};
	});
};
