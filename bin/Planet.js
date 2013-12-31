// Generated by CoffeeScript 1.6.3
/*
A planet that produces units.
*/


(function() {
  window.Planet = (function() {
    Planet.MIN_PLANET_RADIUS = 10;

    Planet.MAX_PLANET_RADIUS = 30;

    Planet.UNIT_DISTANCE_FROM_PLANET = 25;

    Planet.UNIT_DISTANCE_FROM_PLANET_VARIANCE = 10;

    function Planet(x, y, size, color) {
      this.color = color;
      this.position = new Circle(x, y, size);
    }

    Planet.prototype.tick = function() {};

    Planet.prototype.getPosition = function() {
      return this.position;
    };

    Planet.prototype.getColor = function() {
      return this.color;
    };

    Planet.prototype.setColor = function(color) {
      return this.color = color;
    };

    Planet.prototype.spawnUnit = function() {
      var distance_from_planet, random_offset, random_offset_destination, random_unit_vector, unit;
      random_unit_vector = Position.randomUnitVector();
      random_offset = random_unit_vector.clone();
      distance_from_planet = Planet.UNIT_DISTANCE_FROM_PLANET + Random.integer(-Planet.UNIT_DISTANCE_FROM_PLANET_VARIANCE, Planet.UNIT_DISTANCE_FROM_PLANET_VARIANCE);
      random_offset_destination = random_unit_vector.clone();
      random_offset_destination.multiply(this.position.getR() + distance_from_planet);
      random_offset.add(this.position);
      random_offset_destination.add(this.position);
      unit = new Unit(random_offset.getX(), random_offset.getY(), this.color);
      unit.setDestination(random_offset_destination);
      return unit;
    };

    Planet.prototype.drawPlanet = function() {
      var ctx, pos;
      pos = this.getPosition();
      ctx = context.get2d();
      ctx.save();
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.fillStyle = this.color.hex;
      ctx.strokeStyle = '#000';
      ctx.strokeStyle = '#000';
      ctx.arc(pos.getX(), pos.getY(), pos.getR(), 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      return ctx.restore();
    };

    return Planet;

  })();

}).call(this);
