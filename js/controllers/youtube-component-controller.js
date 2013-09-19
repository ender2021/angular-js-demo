citc.controller('YouTubeCompCtrl',
    function YouTubeCompCtrl($scope) {
        $scope.startEndParam = function() {
            var toReturn = '';
            if ($scope.start) {
                toReturn = '?start=' + $scope.start;
            }
            if ($scope.end) {
                toReturn += toReturn == '' ? '?' : '&end=' + $scope.end;
            }
            return toReturn;
        };
    });