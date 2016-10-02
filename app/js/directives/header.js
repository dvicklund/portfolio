module.exports = function(app) {
	app.directive('heading', function() {
		return {
			restrict: 'C',
			controller: 'headerController',
			templateUrl: 'templates/header.html',
			scope: {
				headingText: '='
			}
		};
	});
};
