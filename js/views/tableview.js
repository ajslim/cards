define(["lib/backbone", "models/piece", "views/pieceview", "collections/table"], function(Backbone, Piece, PieceView, Table) {
  var TableView = Backbone.View.extend({
    el: '#table',
    initialize: function(pieces) {
      var table = new Table(pieces);

      this.collection = table;
      this.render();
      this.collection.on("reset", this.render, this);


      this.stage = new createjs.Stage("canvas");
      createjs.Ticker.setFPS(60);
      var that = this;
      createjs.Ticker.addEventListener("tick", function() {
        that.stage.update();
      });



      this.collection.each(function(piece) {

        this.initializePiece(piece);
      }, this);
    },
    render: function() {

    },
    renderPiece: function(piece) {

    },
    initializePiece: function(piece) {
      var pieceView = new PieceView({model: piece, 'stage': this.stage});
    },
    addPiece: function() {

    }

  });
  return TableView;
});
