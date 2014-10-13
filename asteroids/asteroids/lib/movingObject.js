(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function(args) {
    this.pos = args.pos;
    this.vel = args.vel;
    this.radius = args.radius;
    this.color = args.color;
    this.game = args.game;
  };
  
  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (!(this instanceof Asteroids.Bullet)) {
      this.pos = this.game.wrap(this.pos);
    }
  };

  MovingObject.prototype.addFriction = function() {
      this.vel[0] *= .998;
      this.vel[1] *= .998;
  };
  
  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    
    ctx.fill();
  };
  
  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var diffX = Math.abs(this.pos[0] - otherObject.pos[0]);
    var diffY = Math.abs(this.pos[1] - otherObject.pos[1]);
    
    return (this.radius + otherObject.radius) >
        Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  };
  
  MovingObject.prototype.collideWith = function(otherObject) {
    // this.game.remove(otherObject);
    // this.game.remove(this);
  };
  
})();
