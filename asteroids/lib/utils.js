(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  

  var Util = Asteroids.Util = {};
  
  Util.inherits = function(parentClass, childClass) {
    var Surrogate = function() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };
  
  //Util.inherits(MovingObject, Asteroid);
  
  Util.randomVec = function(constant) {
    var x = Math.floor((0.5 - Math.random()) * constant);
    var y = Math.floor((0.5 - Math.random()) * constant);
    return [x, y];
  };
  
})();
