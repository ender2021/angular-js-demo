citc.factory('citcData',
    function ($http, $q) {
        return new JsonFileDataProvider('data/challenges.json', $http, $q);
    });