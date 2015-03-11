angular.module('blackjack.services.sabot', [])
.factory('Sabot', function(){
  var croupier = {};
  //sabot containning an set of cards
  return {
    "SabotRef": [
      {name:"As", value:"1"},
      {name:"1", value:"2"},
      {name:"2", value:"2"},
      {name:"3", value:"3"},
      {name:"4", value:"4"},
      {name:"5", value:"5"},
      {name:"6", value:"6"},
      {name:"7", value:"7"},
      {name:"8", value:"8"},
      {name:"9", value:"9"},
      {name:"10", value:"10"},
      {name:"Jack", value:"10"},
      {name:"Queen", value:"10"},
      {name:"King", value:"10"},
      {name:"Ace", value:"10"}
    ],
    "getCroupier": function(){ return croupier; }
  };
});
