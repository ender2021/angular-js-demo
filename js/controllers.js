function ArenaListCtrl($scope, $dataService)
{
	$dataService.getArenaList(function(arenas) {
		$scope.arenas = arenas;
	});
}
	
function ArenaDetailCtrl($scope, $routeParams, $dataService)
{
	$dataService.getArena($routeParams.arenaId, function(arena) {
		$scope.arena = arena;
	});
}

function WaveDetailCtrl($scope, $routeParams, $dataService)
{
	$dataService.getArena($routeParams.arenaId, function(arena) {
		$scope.arena = arena;
		$scope.wave = arena.waves[$routeParams.waveId-1];
	});
	$scope.updateStatus = function() {
		$dataService.setChallengeStatus($scope.arena.id, $scope.wave.id, $scope.wave.complete);
	}
}