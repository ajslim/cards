require.config({
  paths: {
    'jquery': 'lib/jquery',
    'createjs' : 'https://code.createjs.com/createjs-2015.05.21.min'
  },
  shim: {
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ["lib/underscore", "jquery"],
      exports: 'Backbone'
    }
  }
});

var items = [
  {
    name: "Card 1",
    "type": "CARD",
    "params": {
      "x": 100,
      "y": 100,
      "cardId": "SA"
    }
  },
  { name: "Card 2",
    "type": "CARD",
    "params": {
      "x": 120,
      "y": 120,
      "cardId": "H10"
    }
  },
  { name: "Card 3",
    "type": "CARD",
    "params": {
      "x": 120,
      "y": 120,
      "cardId": "DJ"
    }
  },
  {
    name: "Card 1",
    "type": "DICE",
    "params": {
      "x": 100,
      "y": 100,
      "sides": 6,
      "value": 3
    }
  },
];
require(
  ["jquery",
    "createjs",
    "lib/underscore",
    "lib/backbone",

    "views/tableview"
  ],
  function($, createjs, _, B, TableView) {
    $(function() {
      new TableView(items);
    });
  }
);
