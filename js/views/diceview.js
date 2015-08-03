define(["lib/backbone"], function(Backbone) {
  var DiceView = Backbone.View.extend({
    initialize: function(options) {

      var stage = this.options.stage;
      var pieceName = this.options.model.attributes.name;

      var x = this.model.attributes.params.x;
      var y = this.model.attributes.params.y;
      var piece = this.model.attributes;


      this.dice = new createjs.Container();

      this.diceBackground = new createjs.Shape();
      this.diceBackground.graphics.beginStroke("black");
      this.diceBackground.graphics.beginFill("white");
      this.diceBackground.graphics.drawRect(0, 0, 30, 30);
      this.diceBackground.graphics.endFill();
      this.diceBackground.graphics.endStroke();

      this.diceText = new createjs.Text(this.model.attributes.params.value, "20px Arial")

      this.dice.addChild(this.diceBackground);
      this.dice.addChild(this.diceText);

      this.dice.x = x;
      this.dice.y = y;
      this.dice.on("pressmove", function(evt) {
          this.x = evt.stageX
          this.y = evt.stageY
          stage.setChildIndex( this, stage.getNumChildren()-1);
      });
      this.dice.on("click", function(evt) {

      });
      stage.addChild(this.dice);
    },
    "clickName": function() {

    }
  });
  return DiceView;
});
