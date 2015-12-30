module.exports = function(app) {
	app.directive('headerDirective', function() {
		return {
			restrict: 'AC',
			templateUrl: 'templates/header.html',
			scope: {
				headingText: '='
			}
		}
	});
};