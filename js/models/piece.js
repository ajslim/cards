define(["lib/backbone"], function(Backbone) {
  var Piece = Backbone.Model.extend({
    defaults: {
      "name": "Plain Piece",
      "params": {
        "x": 0,
        "y": 0,
        "cardId": "SA"
      }
    }
  });
  return Piece;
});
