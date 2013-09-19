var citc = angular.module('citc', [])
    .config(function ($routeProvider) {
		$routeProvider.
			when('/', {templateUrl: 'templates/panels-master.htm', controller: 'ArenaListCtrl'}).
			when('/:arenaId', { templateUrl: 'templates/panels-master.htm', controller: 'ArenaDetailCtrl' }).
			when('/:arenaId/:waveId', { templateUrl: 'templates/panels-master.htm', controller: 'WaveDetailCtrl' }).
			otherwise({redirectTo: '/'});
	});