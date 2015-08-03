define(["lib/backbone", "views/cardview", "views/diceview"], function(Backbone, CardView, DiceView) {
  var PieceView = Backbone.View.extend({
    initialize: function(options) {

      var stage = this.options.stage;
      var model = this.options.model;
      var pieceView;

      if(model.attributes.type === "CARD") {
        pieceView = new CardView({model: model, 'stage': stage});
      } else if(model.attributes.type === "DICE") {
        pieceView = new DiceView({model: model, 'stage': stage});
      } else {
        console.log(options);
      }
      stage.addChild(this.card);
    },
    "clickName": function() {

    }
  });
  return PieceView;
});
