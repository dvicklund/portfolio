module.exports = function(app) {
	app.controller('welcomeController', ['$scope', '$window', function($scope, $window) {
		$scope.scrollPos = 0;

		$window.onscroll = function() {
			$scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0
			$scope.$digest()
		}
	}]);
};
