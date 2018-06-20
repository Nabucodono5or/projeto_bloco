(function () {

  angular.module('deckbuilder').
  filter('formatoFilter', function() {
    return function(carta, formato) {
      var out = [];

      if(formato == "standard"){
        if(
          (carta.cardSet == "Classic") ||
          (carta.cardSet == "Kobolds & Catacombs") ||
          (carta.cardSet == "The Witchwood") ||
          (carta.cardSet == "Knights of the Frozen Throne") ||
          (carta.cardSet == "Journey to Un'Goro")
        ){

          out.push(carta);
        }

      }
      // Filter logic here, adding matches to the out var.
      return out;
    }
  });
})();
