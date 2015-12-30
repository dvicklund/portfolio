module.exports = function(app) {
	app.directive('heading', function() {
		return {
			restrict: 'EAC',
			templateUrl: 'templates/header.html',
			scope: {
				headingText: '='
			}
		};
	});
};