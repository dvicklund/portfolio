module.exports = function(app) {
	app.controller('projectsController', ['$scope', function($scope) {
		$scope.projects = [
			{
			// 	name: 'CulinarySoft',
			// 	desc: 'An inventory management solution for chefs',
			// 	url: 'https://culinarysoft.herokuapp.com',
			// 	img: 'http://i.imgur.com/1Pz6a6w.png'
			// }, {
				name: 'Photons Website',
				desc: 'Band website for Seattle indie rock group Photons',
				url: 'projects/photons',
				img: 'http://i.imgur.com/HN9iuZL.png'
			}, {
				name: 'Where Not To Walk Your Dog',
				desc: 'Interactive map of Department of Energy legacy maintenance sites',
				url: 'projects/whereNotToWalkYourDog',
				img: 'http://i.imgur.com/lyANBql.png'
			}, {
			// 	name: 'Catch',
			// 	desc: 'Built for worried parents, a secure location tracker and alert system',
			// 	url: 'https://murmuring-springs-5499.herokuapp.com/',
			// 	img: 'http://i.imgur.com/4bKSszV.png'
			// }, {
				name: 'Tiles For Days',
				desc: 'Little game made over Thanksgiving weekend, 2015',
				url: 'projects/tilesForDays',
				img: 'http://i.imgur.com/TOUhbH9.png'
			}, {
			// 	name: 'FasterBids Account Viz',
			// 	desc: 'Data visualization suite for the proprietary FasterBids platform (now defunct)',
			// 	url: 'https://web.archive.org/web/20171008012300/http://fasterbids.com/',
			// 	img: 'http://i.imgur.com/ChqUyFo.png'
			// }, {
				name: 'Game of Life Clone',
				desc: 'A tribute to the great Game of Life algorithm',
				url: 'projects/gameOfLife',
				img: 'http://i.imgur.com/uKEOi0l.png'
			}, {
				name: 'WikiTabs',
				desc: 'The simplest possible guitar tab website, created mostly for my own personal use',
				url: 'projects/tabs',
				img: 'http://i.imgur.com/ypU8RIX.png'
			}
		]
  }]);
};
