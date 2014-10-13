(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  

  var Ship = Asteroids.Ship = function(args) {
    args.radius = Ship.RADIUS;
    args.color = Ship.COLOR;
    args.vel = [0, 0];
    Asteroids.MovingObject.call(this, args);
  };
 
  Ship.RADIUS = 10;
  Ship.COLOR = "#9900BB";
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Ship);
  
  Ship.prototype.relocate = function() {
    this.vel = [0, 0];
    this.pos = this.game.randomPosition();
  };
  
  Ship.prototype.power = function(impulse) {
    if (Math.abs(this.vel[0] + impulse[0]) + Math.abs(this.vel[1] + impulse[1]) < 10) {
      this.vel[0] += impulse[0];
      this.vel[1] += impulse[1];
    }
  };
  
  Ship.prototype.fireBullet = function() {
    this.game.addBullet();
  };
  
})();
