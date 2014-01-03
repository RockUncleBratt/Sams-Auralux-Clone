// Generated by CoffeeScript 1.6.3
/*
Refactor this whole thing into a class and stop using statics.
http://cg.informatik.uni-freiburg.de/course_notes/sim_08_sp.pdf
*/


(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.CollisionsGrid = (function(_super) {
    __extends(CollisionsGrid, _super);

    function CollisionsGrid() {
      _ref = CollisionsGrid.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CollisionsGrid.compareUnits = function(units, compare_units, player, compare_player) {
      var cell, compare_grid, grid, i, key, kill_units, opponent_cell, unit, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _results;
      this.grid_size = 100;
      grid = new UniformGrid(this.grid_size);
      compare_grid = new UniformGrid(this.grid_size);
      _ref1 = units.getAll();
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        unit = _ref1[_i];
        grid.add(unit.getPosition(), unit);
      }
      _ref2 = compare_units.getAll();
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        unit = _ref2[_j];
        compare_grid.add(unit.getPosition(), unit);
      }
      _ref3 = grid.getItems();
      _results = [];
      for (key in _ref3) {
        cell = _ref3[key];
        opponent_cell = compare_grid.getCell(key);
        if (opponent_cell === false) {
          continue;
        }
        kill_units = Math.min(opponent_cell.length, cell.length);
        _results.push((function() {
          var _k, _ref4, _results1;
          _results1 = [];
          for (i = _k = 0, _ref4 = kill_units - 1; 0 <= _ref4 ? _k <= _ref4 : _k >= _ref4; i = 0 <= _ref4 ? ++_k : --_k) {
            units.remove(cell[i]);
            _results1.push(compare_units.remove(opponent_cell[i]));
          }
          return _results1;
        })());
      }
      return _results;
    };

    return CollisionsGrid;

  })(Collisions);

}).call(this);
