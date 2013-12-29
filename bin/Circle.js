// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Circle = (function(_super) {
    __extends(Circle, _super);

    function Circle(x, y, r) {
      this.r = r;
      Circle.__super__.constructor.call(this, x, y);
    }

    Circle.prototype.renderWireframe = function() {
      var ctx;
      ctx = context;
      ctx.setColor('#F00');
      ctx.setLineWidth(1);
      ctx.get2d().beginPath();
      ctx.get2d().moveTo(this.x, this.y);
      ctx.get2d().lineTo(this.x + this.r, this.y);
      ctx.get2d().stroke();
      ctx.setColor('#070');
      ctx.get2d().fillRect(this.x - 1.5, this.y - 1.5, 3, 3);
      ctx.get2d().beginPath();
      ctx.get2d().fillStyle = 'transparent';
      ctx.get2d().strokeStyle = '#00F';
      ctx.get2d().arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.get2d().closePath();
      return ctx.get2d().stroke();
    };

    Circle.prototype.intersectsWith = function(circle) {
      return this.distanceFrom(circle) <= circle.r + this.r;
    };

    Circle.prototype.getR = function() {
      return this.r;
    };

    Circle.prototype.setR = function(r) {
      return this.r = r;
    };

    return Circle;

  })(Position);

}).call(this);
