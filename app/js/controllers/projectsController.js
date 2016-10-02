module.exports = function(app) {
	app.controller('projectsController', ['$scope', function($scope) {
    $scope.project = 'Something about productivity'
  }]);
};
