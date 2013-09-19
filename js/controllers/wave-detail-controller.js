citc.controller('WaveDetailCtrl',
    function WaveDetailCtrl($scope, $routeParams, citcData) {
        var self = this;

        //set view components
        $scope.navigationView = 'templates/partials/wave-detail-navigation.htm';
        $scope.listView = 'templates/partials/wave-list.htm';
        $scope.detailView = 'templates/partials/wave-detail.htm';

        //load view model content
        $scope.arena = citcData.getArena($routeParams.arenaId);
        $scope.arena.then(function(arena) {
            $scope.wave = arena.waves[$routeParams.waveId - 1];
        });

        //define methods
        $scope.setChallengeStatus = citcData.setChallengeStatus;
    });