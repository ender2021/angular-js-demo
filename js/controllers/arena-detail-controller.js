citc.controller('ArenaDetailCtrl',
    function ArenaDetailCtrl($scope, $routeParams, citcData) {
        var self = this;

        //set view components
        $scope.navigationView = 'templates/partials/arena-detail-navigation.htm';
        $scope.listView = 'templates/partials/wave-list.htm';
        $scope.detailView = 'templates/partials/arena-detail.htm';

        //load view model content
        citcData.getArena($routeParams.arenaId).then(function (arena) {
            $scope.arena = arena;
        });

        //define methods
        $scope.setChallengeStatus = citcData.setChallengeStatus;
        $scope.saveHighscore = function() {
            citcData.setHighScore($scope.arena.id, $scope.arena.highScore);
        };
    });