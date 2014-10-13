(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({
      pos: this.randomPosition(),
      game: this
    });
  };
  
  Game.DIM_X = 800; // --------- subject to change
  Game.DIM_Y = 600; // -------- subject to change
  Game.NUM_ASTEROIDS = 4; // -------- subject to chnage

  Game.prototype.addAsteroids = function() {
    while (this.asteroids.length < Game.NUM_ASTEROIDS) {
      var asteroid = new Asteroids.Asteroid({
        pos: this.randomPosition(),
        game: this
      });
      this.asteroids.push(asteroid);
    }
  };
  
  Game.prototype.addBullet = function() {
    var bullet = new Asteroids.Bullet({
      pos: this.ship.pos,
      vel: [this.ship.vel[0] * 1.6, this.ship.vel[1] * 1.6],
      game: this
    })
    this.bullets.push(bullet);
  }
  
  Game.prototype.allObjects = function() {
    return this.asteroids.concat([this.ship]).concat(this.bullets);
  };
  
  Game.prototype.randomPosition = function() {
    var x = Math.floor(Math.random() * Game.DIM_X);
    var y = Math.floor(Math.random() * Game.DIM_Y);
    
    return [x, y];
  };
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(function(movingObj) {
      movingObj.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    var objects = this.allObjects();
    objects.forEach(function(movingObj) {
      movingObj.move();
    });
  };

  Game.prototype.addFriction = function() {
    var objects = this.allObjects();
    objects.forEach(function(movingObj) {
      movingObj.addFriction();
    });
  }; 
  
  Game.prototype.wrap = function(pos) {
    var x = pos[0];
    var y = pos[1];
    if (x < 0) {
      x = Game.DIM_X + x;
    }
    if (y < 0) {
      y = Game.DIM_Y + y;
    }
    
    return [x % Game.DIM_X, y % Game.DIM_Y];
  };
  
  Game.prototype.checkCollisions = function(){
    for (var i = 0; i < this.allObjects().length; i++) {
      for (var j = i + 1; j < this.allObjects().length; j++) {
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          this.allObjects()[i].collideWith(this.allObjects()[j]);
        }
      }
    }
  };
  
  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
    this.addFriction();
  };
  
  Game.prototype.remove = function(obj) {
    arr = (obj instanceof Asteroids.Asteroid) ? this.asteroids : this.bullets;
    var index = arr.indexOf(obj);
    arr.splice(index, 1);
  };
  
})();
