module.exports = function(app) {
	app.directive('projects', function() {
		return {
			restrict: 'EC',
      controller: 'projectsController',
			templateUrl: 'templates/projects.html'
		};
	});
};
