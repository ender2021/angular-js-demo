var citc = angular.module('citc', []);

citc.factory('$dataService', ['$http', function($http) {
		var $dataService = new ICitcDataProviderServiceContract(
			new JsonFileDataProvider('data/challenges.json', $http)
		);
		return $dataService;
	}]);
	
citc.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {templateUrl: 'views/arena-list.htm', controller: ArenaListCtrl}).
			when('/:arenaId', {templateUrl: 'views/arena-detail.htm', controller: ArenaDetailCtrl}).
			when('/:arenaId/:waveId', {templateUrl: 'views/wave-detail.htm', controller: WaveDetailCtrl}).
			otherwise({redirectTo: '/'});
	}]);