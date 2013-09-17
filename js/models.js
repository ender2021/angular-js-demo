function Arena (id, title, description, waves, highScore, imagePath) {
	var self = this;
	
	self.id = id;
	self.title = title;
	self.description = description;
	self.waves = waves;
	self.highScore = highScore;
	self.imagePath = imagePath;
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