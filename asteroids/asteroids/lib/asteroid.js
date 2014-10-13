(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(args) {
    args.radius = Asteroid.RADIUS;
    args.color = Asteroid.COLOR;
    args.vel = Asteroids.Util.randomVec(25);
    Asteroids.MovingObject.call(this, args);
  };
  
  Asteroid.COLOR = "#888888";
  Asteroid.RADIUS = 15; // ----what should this radius be?
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    } else if (otherObject instanceof Asteroids.Bullet) {
      this.relocate();
      otherObject.remove();
    }
  };

  Asteroid.prototype.relocate = function() {
      this.game.remove(this);
      this.game.addAsteroids();
  };

})();
