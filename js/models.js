function JsonFileDataProvider (filePath, $http) {
	var self = this;
	
	//define private properties
	var dataStructure;
	
	//define private methods
	function _getDataStructure(callback) {
		if (dataStructure) {
			callback(dataStructure);
		} else {
			$http.get(filePath, {cache: false}).
				success(function(data, status) {
					dataStructure = data;
					callback(dataStructure);
				});
		}
	}
	function _mapArena(index, dataElement, deep) {
		var toReturn = new Arena(index + 1, dataElement.title, []);
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
		return 'citc.' + arenaId + '.' + waveId;
	}
	
	function _getChallengeStatusSynchronous(arenaId, waveId) {
		var status = localStorage[_localStorageKey(arenaId, waveId)];
		return !status ? false : status === 'true';
	}
	
	//define public methods
	this.getArenaList = function(callback) {
		_getDataStructure(function(data) {
			var arenas = [];
			for(var i = 0; i < data.length; i++) {
				arenas.push(_mapArena(i, data[i], false));
				callback(arenas);
			}
		});
	};
	this.getArena = function(arenaId, callback) {
		_getDataStructure(function(data) {
			callback(_mapArena(arenaId - 1, data[arenaId - 1], true));
		});
	};
	this.getWave = function(arenaId, waveId, callback) {
		_getDataStructure(function(data) {
			callback(_mapWave(waveId - 1, arenaId, data[arenaId - 1][waveId - 1]));
		});
	};
	this.getChallengeStatus = function(arenaId, waveId, callback) {
		callback(_getChallengeStatusSynchronous(arenaId, waveId));
	}
	this.setChallengeStatus = function(arenaId, waveId, status) {
		localStorage[_localStorageKey(arenaId, waveId)] = status.toString();
	}
}

function Arena (id, title, waves) {
	var self = this;
	
	self.id = id;
	self.title = title;
	self.waves = waves;
	self.completedCount = function() {
		var count = 0;
		for(index in self.waves) {
			if (self.waves[index].complete) { count++; }
		}
		return count;
	};
}

function Wave (id, description, enemies, textStrategy, videoStrategy, complete) {
	this.id = id;
	this.description = description;
	this.enemies = enemies;
	this.textStrategy = textStrategy;
	this.videoStrategy = videoStrategy;
	this.complete = complete;
}

function YouTubeStrategy(videoId, start, end)
{
	this.videoId = videoId;
	this.start = start;
	this.end = end;
}