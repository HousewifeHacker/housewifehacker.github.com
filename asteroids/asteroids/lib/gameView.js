(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game) {
    this.game = game;
  };
  
  GameView.prototype.start = function() {
    this.ctx = canvasEl.getContext("2d");
    this.bindKeyHandlers();
    
    var that = this;
    
    window.setInterval((function () {
      // this.moveObjects();
      this.step();
      this.draw(that.ctx);
    }).bind(that.game), 20);
  };
  
  GameView.prototype.bindKeyHandlers = function() {
    var that = this;
    key("up", function(){ that.game.ship.power([0, -1]) });
    key("down", function(){ that.game.ship.power([0, 1]) });
    key("left", function(){ that.game.ship.power([-1, 0]) });
    key("right", function(){ that.game.ship.power([1, 0]) });
    key("a", function(){ that.game.ship.fireBullet() });
  };
})();