module.exports = function(app) {
	app.controller('projectsController', ['$scope', function($scope) {
		$scope.projects = [
			{
				name: 'CulinarySoft',
				desc: 'An inventory management solution for chefs',
				url: 'https://culinarysoft.herokuapp.com',
				img: 'http://i.imgur.com/1Pz6a6w.png'
			}, {
				name: 'Photons Website',
				desc: 'Band website for Seattle indie rock group Photons',
				url: 'https://photons.herokuapp.com/',
				img: 'http://i.imgur.com/HN9iuZL.png'
			}, {
				name: 'Where Not To Walk Your Dog',
				desc: 'Interactive map of Department of Energy legacy maintenance sites',
				url: 'https://wherenottowalkyourdog.herokuapp.com',
				img: 'http://i.imgur.com/lyANBql.png'
			}, {
				name: 'Catch',
				desc: 'Built for worried parents, a secure location tracker and alert system',
				url: 'https://murmuring-springs-5499.herokuapp.com/',
				img: 'http://i.imgur.com/4bKSszV.png'
			}, {
				name: 'Tiles For Days',
				desc: 'Little game made over Thanksgiving weekend, 2015',
				url: 'https://tilesfordays.herokuapp.com',
				img: 'http://i.imgur.com/TOUhbH9.png'
			}, {
				name: 'FasterBids Account Viz',
				desc: 'Data visualization suite for the proprietary FasterBids platform',
				url: 'http://fasterbids.com/',
				img: 'http://i.imgur.com/ChqUyFo.png'
			}, {
				name: 'Game of Life Clone',
				desc: 'A tribute to the great Game of Life algorithm',
				url: 'https://gameoflifedv.herokuapp.com',
				img: 'http://i.imgur.com/uKEOi0l.png'
			}, {
				name: 'WikiTabs',
				desc: 'The simplest possible guitar tab website, created mostly for my own personal use',
				url: 'https://wikitab.herokuapp.com',
				img: 'http://i.imgur.com/ypU8RIX.png'
			}
		]
  }]);
};
