citc.controller('ArenaListCtrl',
    function ArenaListCtrl($scope, citcData) {
        var self = this;

        //set view components
        $scope.navigationView = 'templates/partials/arena-list-navigation.htm';
        $scope.listView = 'templates/partials/arena-list.htm';
        $scope.detailView = 'templates/partials/all-detail.htm';

        //load view model content
        $scope.arenas = citcData.getArenaList(true);
    });