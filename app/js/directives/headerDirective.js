module.exports = function(app) {
	app.directive('headerDirective', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/header.html',
			scope: {
				headingText: '='
			}
		}
	});
};