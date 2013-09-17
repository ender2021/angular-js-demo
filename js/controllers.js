function ArenaListCtrl($scope, $dataService)
{
	var self = this;
	
	//set view components
	$scope.navigationView = 'views/arena-list-navigation.htm';
	$scope.listView = 'views/arena-list.htm';
	$scope.detailView = 'views/all-detail.htm';
	
	//load view model content
	$scope.arenas = $dataService.getArenaList(true);
}
	
function ArenaDetailCtrl($scope, $routeParams, $dataService)
{
	var self = this;
	self.StatusUpdater = new StatusUpdater($dataService);

	//set view components
	$scope.navigationView = 'views/arena-detail-navigation.htm';
	$scope.listView = 'views/wave-list.htm';
	$scope.detailView = 'views/arena-detail.htm';

	//load view model content
	$dataService.getArena($routeParams.arenaId).then(function(arena) {
	    $scope.arena = arena;
	});
	
	//define methods
	$scope.updateWaveStatus = self.StatusUpdater.update;
    $scope.saveHighscore = function() {
        $dataService.setHighScore($scope.arena.id, $scope.arena.highScore);
    };
}

function WaveDetailCtrl($scope, $routeParams, $dataService)
{
	var self = this;
	self.StatusUpdater = new StatusUpdater($dataService);
	
	//set view components
	$scope.navigationView = 'views/wave-detail-navigation.htm';
	$scope.listView = 'views/wave-list.htm';
	$scope.detailView = 'views/wave-detail.htm';

	//load view model content
	$scope.arena = $dataService.getArena($routeParams.arenaId);
    $scope.arena.then(function(arena) {
        $scope.wave = arena.waves[$routeParams.waveId - 1];
    });
    
	//define methods
	$scope.updateWaveStatus = self.StatusUpdater.update;
}

function YouTubeCompCtrl($scope)
{
	$scope.startEndParam = function() {
		var toReturn = '';
		if ($scope.start)
		{
			toReturn = '?start=' + $scope.start;
		}
		if ($scope.end) {
			toReturn += toReturn == '' ? '?' : '&end=' + $scope.end;
		}
		return toReturn;
	};
}

function StatusUpdater($dataService) {
	var self = this;
	
	self.$dataService = $dataService;
	
	self.update = function(arena, wave) {
		self.$dataService.setChallengeStatus(arena.id, wave.id, wave.complete);
	};
}