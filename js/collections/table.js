define(["lib/backbone", "models/piece"], function(Backbone, Piece) {
  var Table = Backbone.Collection.extend({
    model: Piece,
    initialize: function() {
      this.on("add", this.updateSet, this);
    },
    updateSet: function() {
      pieces = this.models;
    }
  });
  return Table;
});
