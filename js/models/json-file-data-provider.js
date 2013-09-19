function JsonFileDataProvider (filePath, $http, $q) {
    var self = this;

    //define private methods
    function _getDataStructure() {
        var deferred = $q.defer();
        
        $http.get(filePath).
            success(function(data, status) {
                deferred.resolve(data);
            }).
            error(function(data, status) {
                deferred.reject(status);
            });

        return deferred.promise;
    }
    
    function _mapArena(index, dataElement, deep) {
        var toReturn = new Arena(index + 1,
                                 dataElement.title,
                                 dataElement.description,
                                 [],
                                 _getHighScoreSynchronous(index + 1),
                                 dataElement.imagePath);

        if (deep) {
            for(var i = 0; i < dataElement.waves.length; i++) {
                toReturn.waves.push(_mapWave(i, index + 1, dataElement.waves[i]));
            }
        }

        return toReturn;
    }
    function _mapWave(index, arenaId, dataElement) {
        var wave = new Wave(index + 1,
            dataElement.description,
            dataElement.enemies,
            dataElement.textStrategy,
            _mapYouTubeStrategy(dataElement.videoStrategy),
            _getChallengeStatusSynchronous(arenaId, index + 1));
        return wave;
    }

    function _mapYouTubeStrategy(dataElement) {
        return new YouTubeStrategy(dataElement.videoId, dataElement.start ? dataElement.start : null, dataElement.end ? dataElement.end : null);
    }

    function _localStorageKey(arenaId, waveId) {
        return 'citc.' + arenaId + (waveId ? '.' + waveId : '');
    }

    function _getChallengeStatusSynchronous(arenaId, waveId) {
        var status = localStorage[_localStorageKey(arenaId, waveId)];
        return !status ? false : status === 'true';
    }

    function _getHighScoreSynchronous(arenaId) {
        var score = localStorage[_localStorageKey(arenaId)];
        return score ? score : 0;
    }

    //define public methods
    this.getArenaList = function(deepCopy) {
        var promise = _getDataStructure();
        
        return promise.then(function(data) {
            var arenas = [];
            for (var i = 0; i < data.length; i++) {
                arenas.push(_mapArena(i, data[i], deepCopy));
            }
            return arenas;
        });
    };
    this.getArena = function (arenaId) {
        var promise = _getDataStructure();
        
        return promise.then(function(data) {
            return _mapArena(arenaId - 1, data[arenaId - 1], true);
        });
    };
    this.getWave = function (arenaId, waveId) {
        var promise = _getDataStructure();
        
        return promise.then(function(data) {
            return _mapWave(waveId - 1, arenaId, data[arenaId - 1][waveId - 1]);
        });
    };
    this.getChallengeStatus = function(arenaId, waveId) {
        var deferred = $q.defer();

        deferred.resolve(_getChallengeStatusSynchronous(arenaId, waveId));

        return deferred.promise;
    };
    this.setChallengeStatus = function(arenaId, waveId, status) {
        localStorage[_localStorageKey(arenaId, waveId)] = status.toString();
    };
    this.getHighScore = function (arenaId) {
        var deferred = $q.defer();

        deferred.resolve(_getHighScoreSynchronous(arenaId));

        return deferred.promise;
    };
    this.setHighScore = function(arenaId, score) {
        localStorage[_localStorageKey(arenaId)] = score.toString();
    };
}