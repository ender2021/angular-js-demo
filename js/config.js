var citc = angular.module('citc', []);

citc.factory('$dataService', ['$http', function($http) {
		var $dataService = new ICitcDataProviderServiceContract(
			new JsonFileDataProvider('data/challenges.json', $http)
		);
		return $dataService;
	}]);
	
citc.directive('youtube', function() {
	return {
		restrict: 'E',
		transclude: false,
		scope: { videoId: '@videoId', start: '@start', end: '@end' },
		templateUrl: 'views/youtube-component.htm',
		controller: YouTubeCompCtrl,
		replace: true
	};
});
	
citc.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {templateUrl: 'views/panels-master.htm', controller: ArenaListCtrl}).
			when('/:arenaId', {templateUrl: 'views/panels-master.htm', controller: ArenaDetailCtrl}).
			when('/:arenaId/:waveId', {templateUrl: 'views/panels-master.htm', controller: WaveDetailCtrl}).
			otherwise({redirectTo: '/'});
	}]);