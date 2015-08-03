define(["lib/backbone"], function(Backbone) {
  var CardView = Backbone.View.extend({
    initialize: function(options) {
      var spriteSheet = new createjs.SpriteSheet({
          "frames": {
              "width": 73,
              "regX": 36,
              "regY": 49,
              "numFrames": 52,
              "height": 98
          },
          "animations":{},
          "images": ["./img/classic-playing-cards.png"]
        });
      var stage = this.options.stage;
      var pieceName = this.options.model.attributes.name;

      var x = this.model.attributes.params.x;
      var y = this.model.attributes.params.y;
      var cardId = this.model.attributes.params.cardId;

      var piece = this.model.attributes;


      this.card = new createjs.Sprite(spriteSheet);

      function CardIdToFrame(id) {
        var suit = id.substring(0,1);
        var value = id.substring(1);
        var suitValue = 0;
        var valueValue = 0;
        if(suit.toLowerCase() == "c") {
          suitValue = 0;
        } else if(suit.toLowerCase() == "s") {
          suitValue = 1;
        } else if(suit.toLowerCase() == "h") {
          suitValue = 2;
        } else if(suit.toLowerCase() == "d") {
          suitValue = 3;
        }

        if(value.toLowerCase() == "k") {
          valueValue = 13;
        } else if(value.toLowerCase() == "q") {
          valueValue = 12;
        } else if(value.toLowerCase() == "j") {
          valueValue = 11;
        } else if(value.toLowerCase() == "a") {
          valueValue = 1;
        } else {
          valueValue = parseInt(value, 10);
        }
        return suitValue*13 + valueValue-1;
      }

      this.card.gotoAndStop(CardIdToFrame(cardId));


      this.card.x = x;
      this.card.y = y;
      this.card.on("pressmove", function(evt) {
          this.x = evt.stageX
          this.y = evt.stageY
          stage.setChildIndex( this, stage.getNumChildren()-1);
      });
      this.card.on("click", function(evt) {

      });
      stage.addChild(this.card);
    },
    "clickName": function() {

    }
  });
  return CardView;
});
