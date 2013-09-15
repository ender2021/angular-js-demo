function ArenaListCtrl($scope, $dataService)
{
	//set view components
	$scope.navigationView = 'views/arena-list-navigation.htm';
	$scope.listView = 'views/arena-list.htm';
	$scope.detailView = 'views/all-detail.htm';
	
	//load view model content
	$dataService.getArenaList(function(arenas) {
		$scope.arenas = arenas;
	});
}
	
function ArenaDetailCtrl($scope, $routeParams, $dataService)
{
	//set view components
	$scope.navigationView = 'views/arena-detail-navigation.htm';
	$scope.listView = 'views/wave-list.htm';
	$scope.detailView = 'views/arena-detail.htm';

	//load view model content
	$dataService.getArena($routeParams.arenaId, function(arena) {
		$scope.arena = arena;
	});
}

function WaveDetailCtrl($scope, $routeParams, $dataService)
{
	//set view components
	$scope.navigationView = 'views/wave-detail-navigation.htm';
	$scope.listView = 'views/wave-list.htm';
	$scope.detailView = 'views/wave-detail.htm';

	//load view model content
	$dataService.getArena($routeParams.arenaId, function(arena) {
		$scope.arena = arena;
		$scope.wave = arena.waves[$routeParams.waveId-1];
	});
	
	//define action methods
	$scope.updateStatus = function() {
		$dataService.setChallengeStatus($scope.arena.id, $scope.wave.id, $scope.wave.complete);
	}
}