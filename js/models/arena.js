function Arena(id, title, description, waves, highScore, imagePath) {
    var self = this;

    self.id = id;
    self.title = title;
    self.description = description;
    self.waves = waves;
    self.highScore = highScore;
    self.imagePath = imagePath;
    self.completedCount = function () {
        var count = 0;
        for (index in self.waves) {
            if (self.waves[index].complete) { count++; }
        }
        return count;
    };
}