function ICitcDataProviderServiceContract(dataProvider) {
	this.getArenaList = function(callback) {
		return dataProvider.getArenaList(callback);
	};
	this.getArena = function(arenaId, callback) {
		return dataProvider.getArena(arenaId, callback);
	};
	this.getWave = function(arenaId, waveId, callback) {
		return dataProvider.getWave(arenaId, waveId);
	};
	this.getChallengeStatus = function(arenaId, waveId, callback) {
		return dataProvider.getChallengeStatus(arenaId, waveId, callback);
	};
	this.setChallengeStatus = function(arenaId, waveId, status) {
		return dataProvider.setChallengeStatus(arenaId, waveId, status);
	}
}