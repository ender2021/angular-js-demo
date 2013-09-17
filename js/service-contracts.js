function ICitcDataProviderServiceContract(dataProvider) {
	this.getArenaList = function(deepCopy) {
		return dataProvider.getArenaList(deepCopy);
	};
	this.getArena = function(arenaId) {
		return dataProvider.getArena(arenaId);
	};
	this.getWave = function(arenaId, waveId) {
		return dataProvider.getWave(arenaId, waveId);
	};
	this.getChallengeStatus = function(arenaId, waveId) {
		return dataProvider.getChallengeStatus(arenaId, waveId);
	};
	this.setChallengeStatus = function(arenaId, waveId, status) {
		return dataProvider.setChallengeStatus(arenaId, waveId, status);
	};
    this.getHighScore = function(arenaId) {
        return dataProvider.getHighScore(arenaId);
    };
    this.setHighScore = function(arenaId, score) {
        return dataProvider.setHighScore(arenaId, score);
    };
}